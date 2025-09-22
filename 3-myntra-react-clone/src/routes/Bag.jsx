
import BagSummary from '../components/BagSummary'
import BagItem from '../components/BagItem'
import {useSelector} from "react-redux"
import Bagempty from '../components/Bagempty'
function bag() {

  const bagItems=useSelector(state=>state.bag)
  const items =useSelector(state=>state.items)
  
  const finalItems=items.filter(items=>{
    const itemIndex=bagItems.indexOf(items.id);
    return itemIndex>=0;
  })
  return (
     <div> 
      {finalItems.map(item=><BagItem item={item}/>  )}

      {finalItems.length>0?<BagSummary/>:<Bagempty/>} 
       
     </div>
  )
}

export default bag
