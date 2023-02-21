import React, { useContext } from "react";
import CartProductsContext from "../../context/cartProductsContext";
import './styles.css';
import { Link } from "react-router-dom";

const CartWidget = () => {

  const { cartProducts } = useContext(CartProductsContext)
  
  return (
    
    <Link className="cartWidget" to={`/cart`}>
      <p className="amountCart">
        <strong>{cartProducts.length}</strong>
      </p>
    </Link>

  );
};

export default CartWidget;