import React, { useContext } from "react";
import ArticleContainer from "../../components/articleContainer";
import CartProductCard from "../../components/cartProductCard";
import CartProductsContext from "../../context/cartProductsContext";
import "./styles.css"
import CountersContext from "../../context/counterContext";

const CartProducts = () => {
  
  const { cartProducts } = useContext(CartProductsContext)
  const { counters } = useContext(CountersContext);
  console.log(counters);
 
  return (
    
    <ArticleContainer>
      <h1>Carrito de compras</h1>
      <div className="cartProductsContainer">
        {cartProducts.length ? cartProducts.map(product => <CartProductCard key={product.id} product={product} />) : "Tu carrito se encuentra vacío"}
      </div>
    </ArticleContainer>
  )
};

export default CartProducts;