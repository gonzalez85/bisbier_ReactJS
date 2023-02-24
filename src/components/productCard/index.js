import React, { useContext } from "react";
import "./styles.css";
import CartProductsContext from "../../context/cartProductsContext";
import { Link } from "react-router-dom";
import CountersContext from "../../context/counterContext";

function ProductCard({ product, detail}) {
  const { cartAdd } = useContext(CartProductsContext);
  const { increment, decrement, counters } = useContext(CountersContext);
  
  // setCounters(countersCategory)

  return(
    <div className="productCard">
      <img 
        className="imgProductCard"
        src={`../images/${product.image}.jpg`}
        alt="Cerveza Blonde" />
      <div className="descProductCard">
        <h2 className="titleProduct">{product.title}</h2>
        <div className="descProduct">
          
          {detail 
        ? (<p>{product.fullDescription}</p>) 
        : (<><p>{product.description} 
          <Link className="clearLink" key={product.id} to={`/product/${product.id}`}>
            Ver mas detalles...
          </Link>
        </p></>)
        }

        </div>
        
        <div className="buttonDiv">
          <span className="price">{product.price}</span>
          
          <div className="formAdd">
          <div className="counter">
            <button className="btnCount btnMinus" onClick={decrement}>-</button>
            <span className="count">{
            // console.log(counters["counter"+0])}{
            //   console.log(counters)}{
            counters["counter"+product.id]
            }</span>
            <button className="btnCount btnPlus" onClick={() => increment(counters["counter"+product.id], "counter"+product.id)}>+</button>
          </div>
          {/* <button href="#" className="btnForm" onClick={() => cartAdd(productToAdd)}>Agregar al carrito</button> */}
          <button href="#" className="btnForm" onClick={() => cartAdd(product)}>Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;