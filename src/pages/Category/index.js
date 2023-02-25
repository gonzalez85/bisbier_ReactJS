import React, { useContext } from "react";
import { useParams } from "react-router";
import ArticleContainer from "../../components/articleContainer";
import ProductCard from "../../components/productCard";
import ProductContext from "../../context/productsContext";

const Category = () => {
  
  let { id } = useParams();
  const { products } = useContext(ProductContext);
  let category = products.filter(data => data.category.toLowerCase()===id);
  let countersCategory = {}
  category.map(e => countersCategory["counter"+e.id] = e.quantity)
    
  return (
    
    <ArticleContainer>
      <h1>Usted está en la categoría: <span className="categoryId">{id}</span></h1>
      
      {category.map(product => {
        return (
          <ProductCard key={product.id} product={product ? product : ""} countersProducts={countersCategory} /> 
        )
      })}
    </ArticleContainer>
  )
};

export default Category;