import React from "react";
import "./Product.css";
import {useStateValue} from "./StateProvider";


function Product({id , title , image , price , rating}) {
  
const [{} , dispatch] = useStateValue();

const addToBasket = () => {
// Add item to basket....
dispatch({
type : 'ADD_TO_BASKET',
item : {
  id : id,
  title : title,    // Key : Value
  image : image,
  price : price,
  rating : rating,
},
});
};



  return(

    <div className="product">
     <div className="p_info">
       <p>{title}</p>
       <p className="p_price">
         <small>$</small>
         <strong>{price}</strong>
       </p>
      <div className="p_rating">
       { Array(rating)
         .fill()
         .map((_) => ( 
         <p>⭐</p>
         ))}
       </div>
     </div>
 
   <img src={image} alt="" className= "p_img"/>
   <button className="p_button" onClick = {addToBasket}>
     Add To Basket </button>

 </div>
 
  );
}


export default Product;