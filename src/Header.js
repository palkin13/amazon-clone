import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";

function Header()
{

const [{basket , user}] = useStateValue();

console.log(basket);

const login = () => {
  if(user) {
     auth.signOut();
  }
}

  return (
<nav className="header">
{ /* Logo -> Image */ }
<Link to="/">
<img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
     alt="amazon_logo"
     className="logo" />
</Link>
{ /* Search */ } 
<div className="search">
  <input type="text" className="searchInput" />
  <SearchIcon className="searchIcon"/>
</div>

{ /* 3 Links */ }

<div className="links">
  { /* 1st link */ }
   <Link to={!user && "/login"} className="header_link">
   <div className="link" onClick={login}>
      <span className="link_line1">Hello , {!user ? "Guest" : user.email}</span>
      <span className="link_line2">{ user ? "Sign Out" : "Sign In" }</span>
   </div>
   </Link>

  { /* 2nd link */ }
  <Link to="/" className="header_link">
   <div className="link">
      <span className="link_line1">Returns</span>
      <span className="link_line2">& Orders</span>
   </div>
   </Link>

  { /* 3rd link */ }
  <Link to="/" className="header_link">
   <div className="link">
      <span className="link_line1">Your</span>
      <span className="link_line2">Prime</span>
   </div>
   </Link>

  { /* 4th link */ } { /* Basket */ }
  <Link to="/checkout" className="header_link">
   <div className="basket">
      <ShoppingBasketIcon />
      <span className="link_line2 basket_count">{basket?.length}</span>
   </div>
   </Link>


</div>  





</nav>
);  
}

export default Header;