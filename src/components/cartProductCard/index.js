import React, { useContext } from "react";
import "./styles.css";
import CartProductsContext from "../../context/cartProductsContext";
// import CountersContext from "../../context/counterContext";

const CartProductCard = ({ product, detail }) => {

  const { cartRemove, increment, decrement, counters  } = useContext(CartProductsContext);
  // const { increment, decrement, counters } = useContext(CountersContext);
  
  const imageUrl = `../images/${product.image}.jpg`
  const imageAlt = product.title
  
  const counter = "counter"+product.id
  
  return(
    <div className="productCard">
      <img className="imgProductCard" src={imageUrl} alt={imageAlt} />
      <div className="descProductCard">
        <h2 className="titleProduct">{product.title}</h2>
        <div className="descProduct">
          {detail 
            ? (<p>{product.fullDescription}</p>) 
            : (<><p>{product.description}</p></>)
          }
        </div>
        <div className="buttonDiv">
          <span className="price">{product.price}</span>
          <div className="formAdd">
            <div className="counter">
              <button className="btnCount btnMinus" onClick={() => decrement(product.quantity, counter)}>-</button>
              <span className="count">{product.quantity}</span>
              <button className="btnCount btnPlus" onClick={() => increment(product.quantity, counter)}>+</button>
            </div>
          <button href="#" className="btnForm" onClick={() => cartRemove({...product})}>Quitar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;