import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

import { CircularProgress } from "@mui/material";

import ProductContext from "../../context/productsContext";

import ProductCard from "../../components/productCard";

const Category = () => {
  
  let { id } = useParams();
  const { products } = useContext(ProductContext);
  const [loading, setLoading] = useState(false);
  let category = products.filter(data => data.category.toLowerCase()===id);
  let countersCategory = {};
  
  category.map(e => countersCategory["counter"+e.id] = e.quantity);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [id]);

  return (
    <>
      <h1>Usted está en la categoría: {id}</h1>
      {loading ? <CircularProgress color="inherit" /> 
      : 
      category.map(product => {
        return (
          <ProductCard 
            key={product.id} 
            product={product ? product : ""} 
            countersProducts={countersCategory} 
          /> 
        )
      })}
    </>
  )
};

export default Category;