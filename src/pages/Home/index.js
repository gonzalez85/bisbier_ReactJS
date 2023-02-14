import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ArticleContainer from "../../components/articleContainer";
import ProductCard from "../../components/productCard";

const Home = () => {
  const detail=false;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios("../data/products.json").then((res) =>
      setProducts(res.data)
    );
  }, []);
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
      };
    </ArticleContainer>
  );
};

export default Home;