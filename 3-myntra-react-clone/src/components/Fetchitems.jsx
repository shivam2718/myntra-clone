import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "/src/store/itemSlice.js";
import {fetchStatusActions} from "/src/store/fetchStatusSlice.js"


const FetchItems=()=>{
 
const fetchStatus = useSelector(store => store.fetchStatus);
const dispatch= useDispatch();
useEffect(() => {
    if(fetchStatus.fetchDone)return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchStatusActions.markFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
        .then((res) => res.json())
        .then(({items}) => {
           
           dispatch(itemsActions.addInitialItems(items));
           dispatch(fetchStatusActions.markFetchDone());
            dispatch(fetchStatusActions.markFetchingFinished());
        })
        .catch((err) => {
            if (err.name !== "AbortError") {
                console.error("Fetch error:", err);
            }
        });
    return () => {
        controller.abort();
    };
}, [fetchStatus]);


return <></>
}
export default FetchItems;