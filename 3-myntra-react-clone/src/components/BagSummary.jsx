import {useSelector} from "react-redux"
import BagItem from '../components/BagItem'
import {bagActions} from "/src/store/bagSlice.js"
const BagSummary=({})=> {

   const bagItemsIds=useSelector(state=>state.bag)
   const items =useSelector(state=>state.items)
  
  const finalItems=items.filter(items=>{
    const itemIndex=bagItemsIds.indexOf(items.id);
    return itemIndex>=0;
  })

   const CONVENIENCE_FEES=99; 
   let bagSummaryElement = document.querySelector('.bag-summary');
  let totalItem = bagItemsIds.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  finalItems.forEach(bagItem => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;
  const bagSummary={
    totalItem:bagItemsIds.length,
    totalMRP:2345,
    totalDiscount:999,
    finalPayment:1346
  };
  return (
    
    <div className="BagSummary">
    <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">₹99</span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{finalPayment}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>
    </div>
  )
}

export default BagSummary
