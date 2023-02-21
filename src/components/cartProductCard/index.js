import React, { useContext } from "react";
import "./styles.css";
import CartProductsContext from "../../context/cartProductsContext";

function CartProductCard({ props, detail }) {
  const { cartProducts, counter, increment, decrement, cartAdd, productToAdd } = useContext(CartProductsContext);
    
  return(
    <div className="productCard">
      
      <img 
        className="imgProductCard"
        src={`../images/${props.image}.jpg`}
        alt="Cerveza Blonde" />

      <div className="descProductCard">
        <h2 className="titleProduct">{props.title}</h2>
        <div className="descProduct">
          
          {detail 
        ? (<p>{props.fullDescription}</p>) 
        : (<><p>{props.description} 
        </p></>)}

        </div>
        
        <div className="buttonDiv">
          <span className="price">{props.price}</span>
          <div className="formAdd">
            <div className="counter">
              <button className="btnCount btnMinus" onClick={decrement}>-</button>
              <span className="count">{props.quantity}</span>
              <button className="btnCount btnPlus" onClick={increment}>+</button>
            </div>
          <button href="#" className="btnForm" onClick={() => cartAdd(productToAdd)}>Quitar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;