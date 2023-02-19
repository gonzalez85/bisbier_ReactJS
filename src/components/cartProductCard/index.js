import React from "react";
import "./styles.css";

function CartProductCard({ props, detail }) {
  
  return(
    <div className="contProductCard">
      
      <div className="contDescProductCard">
        <p className="titleProduct">{props.title}</p>
        <button href="#" className="btnForm">{props.price}</button>
      </div>
    </div>
  );
};

export default CartProductCard;