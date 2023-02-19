import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ArticleContainer from "../../components/articleContainer";
import ProductCard from "../../components/productCard";
import "./styles.css";
import ProductContext from "../../context/productsContext";

const Home = () => {

  const { products } = useContext(ProductContext);
  const detail=false;
  
  return (
    <ArticleContainer>
      <h1>Bienvenidos a la tienda de Bisbier!</h1>
      {products.map(product => {
        return (
          <Link className="clearLink" key={product.id} to={`/product/${product.id}`}>
            <ProductCard props={product} detail={detail} />
          </Link>
        );
        })
      }
    </ArticleContainer>
  );
};

export default Home;