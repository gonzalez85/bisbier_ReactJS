import React, { useContext } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import CartProductsContext from "../../context/cartProductsContext";
import CounterContext from "../../context/counterContext";

const ProductCard = ({ product, detail }) => {

  const { cartAdd } = useContext(CartProductsContext);
  const { increment, decrement, counters, setCounters } = useContext(CounterContext);

  const counterId = "counter"+product.id;
  const counterCartId = "counterCart"+product.id;
  const newCounters = {...counters};
  const availability = product.stock - counters[counterCartId];
  const productToAddQuantity = counters[counterId] > availability ? availability : counters[counterId];
  
  newCounters[counterCartId] += productToAddQuantity;
  
  return(
    <div className="productCard">
      <img className="imgProductCard" src={`../images/${product.image}.jpg`} alt={product.title} />
      <div className="descProductCard">
        <h2 className="titleProduct">{product.title}</h2>
        <div className="descProduct">
          {detail ? (<p>{product.fullDescription}</p>) : (
            <>
              <p>{product.description}</p>
              <Link className="productDetailLink" key={product.id} to={`/product/${product.id}`}>
                Ver mas detalles...
              </Link>
            </>
          )}
        </div>
        <div className="buttonDiv">
          <span className="price">$ {product.price}</span>
          <div className="formAdd">
            <div className="counter">
              <button className="btnCount btnMinus" onClick={() => decrement(productToAddQuantity, counterId)}>-</button>
              <span className="count">{productToAddQuantity}</span>
              <button className="btnCount btnPlus" onClick={() => increment(productToAddQuantity, counterId, availability)}>+</button>
            </div>
            {availability > 0 
            ?
            <button className="btnForm" onClick={() => {
              cartAdd({...product});
              setCounters(newCounters);
            }}>Agregar al carrito</button>
            :
            <button className="btnFormDisabled">Sin Stock</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;