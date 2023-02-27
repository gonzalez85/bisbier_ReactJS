import React, { useContext } from "react";
import ArticleContainer from "../../components/articleContainer";
import CartProductCard from "../../components/cartProductCard";
import CartProductsContext from "../../context/cartProductsContext";

const CartProducts = () => {
  
  const { cartProducts } = useContext(CartProductsContext)

  return (
    
    <ArticleContainer>
      <h1>Carrito de compras</h1>
      
      {cartProducts.map(product => {
        return (
            <CartProductCard key={product.id} product={product ? product : ""} /> 
        )
      })}
    </ArticleContainer>
  )
};

export default CartProducts;