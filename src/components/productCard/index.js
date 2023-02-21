import React, { useContext } from "react";
import "./styles.css";
import CartProductsContext from "../../context/cartProductsContext";
import { Link } from "react-router-dom";

function ProductCard({ product, detail}) {
  const { cartProducts, counter, increment, increment2, decrement, cartAdd, productToAdd } = useContext(CartProductsContext);
  
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
            <span className="count">{product.quantity}</span>
            <button className="btnCount btnPlus" onClick={() => increment2(product.quantity)}>+</button>
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