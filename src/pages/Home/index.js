import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../../components/productCard";
import "./styles.css";
import ProductContext from "../../context/productsContext";
import { CircularProgress } from "@mui/material";

const Home = () => {

  const { products } = useContext(ProductContext);
  const [loading, setLoading] = useState(false);
  const detail=false;
  let counters = {}
  products.map(e => counters["counter"+e.id] = e.quantity)

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <article>
      <h1>Bienvenidos a la tienda de Bisbier!</h1>
      {loading ? (
        <div className="Spinner">
          <CircularProgress color="inherit" />
        </div>
      ) : products.map(product => {
        return (
          <ProductCard 
            key={product.id}
            product={product}
            detail={detail}
            countersProducts={counters}/>
        );
      })}
    </article>
  );
};

export default Home;