import React from "react";
import "./CheckoutProduct.css";
import {useStateValue} from "./StateProvider";


function CheckoutProduct({id,title,image,price,rating}) {

//console.log(id,title,image,price,rating);

const [{} , dispatch] = useStateValue();

const removeFrombasket = () => {
// removing items from basket
dispatch({
  type : 'REMOVE_FROM_BASKET',
  id : id,
});
}

return (
<div className="checkoutProduct">

 

  <img src = {image} alt="checkoutProduct_image" />
  <div className="checkoutProduct_info">
  <p className="checkoutProduct_title">{title}</p>
  <p className="checkoutProduct_price">
    <small>$</small>
    <strong>{price}</strong>
  </p>
  <div className="checkoutProduct_rating">
       { Array(rating)
         .fill()
         .map((_) => ( 
         <p>⭐</p>
         ))}
   </div>
      <button className="checkoutProduct_button" onClick={removeFrombasket}>
          Remove From Basket </button>  

   </div>
 

   
  
 



  
 
</div>

  );
}




export default CheckoutProduct;