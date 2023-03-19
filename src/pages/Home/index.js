import React, { useContext, useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";

import ProductContext from "../../context/productsContext";

import ProductCard from "../../components/productCard";

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
    <>
      <h1>Bienvenidos a la tienda de Bisbier!</h1>
      {loading ? <CircularProgress color="inherit" /> 
      : 
      products.map(product => 
        <ProductCard 
          key={product.id} 
          product={product} 
          detail={detail} 
          countersProducts={counters}
        />
      )}
    </>
  );
};

export default Home;