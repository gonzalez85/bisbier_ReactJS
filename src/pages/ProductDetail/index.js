import React, { useContext, useEffect, useState } from "react";

import { useParams } from "react-router";
import { CircularProgress } from "@mui/material";

import ProductsContext from "../../context/productsContext";

import ProductCard from "../../components/productCard";
import Error from "../Error";

const ProductDetail = () => {

  let { id } = useParams();
  const { products } = useContext(ProductsContext);
  const [loading, setLoading] = useState(false);
  const detail=true;

  const product = products.find(p => p.id === id)
  
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [id]);
  
  return (
    <>
      <h1>Detalle del produto</h1>
      {loading ? <CircularProgress color="inherit" /> 
      :
      product ? <ProductCard product={product} detail={detail} /> 
      : 
      <Error />}
    </>
  );
};

export default ProductDetail;