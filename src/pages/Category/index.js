import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import ArticleContainer from "../../components/articleContainer";
import ProductCard from "../../components/productCard";
import ProductContext from "../../context/productsContext";
import { CircularProgress } from "@mui/material";

const Category = () => {
  
  let { id } = useParams();
  const { products } = useContext(ProductContext);
  const [loading, setLoading] = useState(false);
  let category = products.filter(data => data.category.toLowerCase()===id);
  let countersCategory = {}
  category.map(e => countersCategory["counter"+e.id] = e.quantity)

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [id]);

  return (
    
    <ArticleContainer>
      <h1>Usted está en la categoría: <span className="categoryId">{id}</span></h1>
      
      {loading ? (
        <div className="Spinner">
          <CircularProgress color="inherit" />
        </div>
      ) : category.map(product => {
        return (
          <ProductCard key={product.id} product={product ? product : ""} countersProducts={countersCategory} /> 
        )
      })}
    </ArticleContainer>
  )
};

export default Category;