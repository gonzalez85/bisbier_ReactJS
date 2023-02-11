import React from "react";
import "./styles.css";

function ProductCard({ props }) {
  return(
    <div className="contProductCard">
      <img 
        className="imgProductCard"
        src={`../images/${props.image}.jpg`}
        alt="Cerveza Blonde" />
      <div className="contDescProductCard">
        <p className="titleProduct">{props.title}</p>
        <p className="descProduct">{props.description}</p>
        <button href="#" className="btnForm">{props.price}</button>
      </div>
    </div>
  );
};

export default ProductCard;