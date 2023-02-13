import React from "react";
import "./styles.css";
import { useParams } from "react-router";

function ProductCard({ props }) {
  let { id } = useParams();
  
  return(
    <div className="contProductCard">
      <img 
        className="imgProductCard"
        src={`../images/${props.image}.jpg`}
        alt="Cerveza Blonde" />
      <div className="contDescProductCard">
        <p className="titleProduct">{props.title}</p>
        <p className="descProduct">{isNaN(id) ? props.description : props.fullDescription}</p>
        <button href="#" className="btnForm">{props.price}</button>
      </div>
    </div>
  );
};

export default ProductCard;