import React from "react";

import './cart.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const Cart = ({name,price,benefits,missed}) =>{
   return(  <div className="maindiv">
    <div className="div1">
        <div className="div2">
        <p>{name}</p>
        <h1>{price}</h1><p className="p1">/month</p>
        </div>
         <div className="div3">
        <ul className="ul1">
        {benefits.map((b,index) => {
          return  (<li key = {index}>{b}</li>)
})}
        </ul>
        <ul className="ul2">
        {missed.map((m,index) => {
          return  (<li key = {index}>{m}</li>)
})}
        </ul>
        </div>
    </div>   
    <div className="butt">Button</div> 
    </div>  )
}


export default Cart;