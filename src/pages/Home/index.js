import React, { useContext } from "react";
import ArticleContainer from "../../components/articleContainer";
import ProductCard from "../../components/productCard";
import "./styles.css";
import ProductContext from "../../context/productsContext";

const Home = () => {

  const { products } = useContext(ProductContext);
  const detail=false;
  let counters = {}

  products.map(e => counters["counter"+e.id] = e.quantity)
  
  return (
    <ArticleContainer>
      <h1>Bienvenidos a la tienda de Bisbier!</h1>
      {products.map(product => {
        return (
          <ProductCard 
            key={product.id}
            product={product}
            detail={detail}
            countersProducts={counters}/>
        );
      })}
    </ArticleContainer>
  );
};

export default Home;