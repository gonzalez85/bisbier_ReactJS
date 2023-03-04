import React, { useContext } from "react";
import "./styles.css";
import CartProductsContext from "../../context/cartProductsContext";
import { Link } from "react-router-dom";
import CounterContext from "../../context/counterContext";

const ProductCard = ({ product, detail }) => {

  const { cartAdd } = useContext(CartProductsContext);
  const { increment, decrement, counters, setCounters } = useContext(CounterContext);
	
  const imageUrl = `../images/${product.image}.jpg`
  const imageAlt = product.title
  
  const counterId = "counter"+product.id
  const counterCart = "counterCart"+product.id
  const productToAddQuantity = counters[counterId]

  const newCounters = {...counters}
	
  newCounters[counterCart] += productToAddQuantity
		
  // product.quantity = productToAddQuantity
  
  return(
    <div className="productCard">
      <img className="imgProductCard" src={imageUrl} alt={imageAlt} />
      <div className="descProductCard">
        <h2 className="titleProduct">{product.title}</h2>
        <div className="descProduct">
          {detail ? (<p>{product.fullDescription}</p>) : (
            <><p>{product.description}</p>
            <Link className="clearLink" key={product.id} to={`/product/${product.id}`}>
              Ver mas detalles...
            </Link></>
          )}
        </div>
        <div className="buttonDiv">
          <span className="price">{product.price}</span>
          <div className="formAdd">
          <div className="counter">
            <button className="btnCount btnMinus" onClick={() => decrement(productToAddQuantity, counterId)}>-</button>
            <span className="count">
              {productToAddQuantity}
            </span>
            <button className="btnCount btnPlus" onClick={() => increment(productToAddQuantity, counterId, product.stock)}>+</button>
          </div>
          <button href="#" className="btnForm" onClick={() => {
            cartAdd({...product});
            setCounters(newCounters);
          }}>Agregar al carrito</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;