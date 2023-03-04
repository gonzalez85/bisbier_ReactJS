import React, { useContext } from "react";
import "./styles.css";
import CartProductsContext from "../../context/cartProductsContext";
import CountersContext from "../../context/counterContext";

const CartProductCard = ({ product, detail }) => {

  const { cartRemove  } = useContext(CartProductsContext);
  const { counters, setCounters, increment, decrement } = useContext(CountersContext);
  
  const counterId = "counterCart"+product.id
  const counter = counters[counterId]
  
  const newCounters = {...counters}
	
  newCounters[counterId] = 0

  return(
    <div className="CartProductCardContainer">
      <img className="imgProductCard" src={`../images/${product.image}.jpg`} alt={product.title} />
      <div className="descProductCard">
        <h2 className="titleProduct">{product.title}</h2>
        <div className="descProduct">
          {detail ? (<p>{product.fullDescription}</p>) : (<p>{product.description}</p>)}
        </div>
        <div className="buttonDiv">
          <span className="price">{product.price}</span>
          <div className="formAdd">
            <div className="counter">
              <button className="btnCount btnMinus" onClick={() => decrement(counter, counterId)}>-</button>
              <span className="count">{counter}</span>
              <button className="btnCount btnPlus" onClick={() => increment(counter, counterId, product.stock)}>+</button>
            </div>
            <button href="#" className="btnForm" onClick={() => {
              cartRemove({...product});
              setCounters(newCounters);
            }}>Quitar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;