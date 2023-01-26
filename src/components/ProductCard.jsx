import React from "react";
import "../css/ProductCard.css";

function ProductCard(props) {
  return(
    <div className="contProductCard">
      <img 
      className="imgProductCard"
      src={require(`../images/${props.image}.jpg`)}
      alt="Cerveza Blonde" />
      <div className="contDescProductCard">
        <p className="titleProduct">{props.style}</p>
        <p className="descProduct">{props.description}</p>
        <a href="#" className="btnForm">{props.price}</a>
      </div>
    </div>
  );
}
export default ProductCard;