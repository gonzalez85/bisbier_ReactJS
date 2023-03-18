import React, { useContext } from "react";
import "./styles.css";
import CartProductsContext from "../../context/cartProductsContext";
import CountersContext from "../../context/counterContext";

const CartProductCard = ({ product, isConfirmed }) => {

  const { cartRemove  } = useContext(CartProductsContext);
  const { counters, setCounters, increment, decrement } = useContext(CountersContext);
  
  const counterId = "counterCart"+product.id
  const counter = counters[counterId]
  
  const newCounters = {...counters}
	
  newCounters[counterId] = 0

  return(
    <div className="cartProductCardContainer">
      <img className="imgCartProductCard" src={`../images/${product.image}.jpg`} alt={product.title} />
        <h2 className="titleCartProduct">{product.title}</h2>
            {isConfirmed ? <span className="count">x {counter}</span> : <div className="counterCart">
              <button className="btnCount btnMinus" onClick={() => decrement(counter, counterId)}>-</button>
              <span className="count">{counter}</span>
              <button className="btnCount btnPlus" onClick={() => increment(counter, counterId, product.stock)}>+</button>
            </div>}
          <span className="priceCart">$ {product.price*counter}</span>
            {isConfirmed ? null : <button href="#" className="btnCartForm" onClick={() => {
              cartRemove({...product});
              setCounters(newCounters);
            }}>Quitar</button>}
    </div>
  );
};

export default CartProductCard;