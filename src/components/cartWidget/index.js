import React, { useContext } from "react";
import CartProductsContext from "../../context/cartProductsContext";
import './styles.css';

const CartWidget = () => {

  const { cartProducts } = useContext(CartProductsContext)
  
  return (
    <a href="/cart" title="Carrito" className="cartWidget">
      <p className="amountCart"><strong>{cartProducts.length}</strong></p>
    </a>
  );
};

export default CartWidget;