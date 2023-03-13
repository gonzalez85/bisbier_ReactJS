import React, { useContext } from "react";
import CartProductsContext from "../../context/cartProductsContext";
import CountersContext from "../../context/counterContext";
import './styles.css';
import { Link } from "react-router-dom";

const CartWidget = () => {

  const { cartProducts } = useContext(CartProductsContext)
  const { counters } = useContext(CountersContext)
  const totalQty = cartProducts.map(product => +counters["counterCart"+product.id]).reduce((a, b) => a + b, 0);
  
  return (
    
    <Link className="cartWidget" to={`/cart`}>
      <p className="amountCart">
        <strong>{totalQty}</strong>
      </p>
    </Link>

  );
};

export default CartWidget;