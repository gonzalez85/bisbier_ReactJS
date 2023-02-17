import React, { useContext } from "react";
import CartProductContext from "../../context/cartProductsContext";
import './styles.css';

const CartWidget = () => {

  const {cartProducts} = useContext(CartProductContext)
  console.log(CartProductContext)
  return (
    <a href="#" title="Carrito" className="cartWidget">
      <p className="amountCart"><strong>{cartProducts.length}</strong></p>
    </a>
  );
};

export default CartWidget;