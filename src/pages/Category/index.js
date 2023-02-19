import React, { useContext } from "react";
import { useParams } from "react-router";
import ArticleContainer from "../../components/articleContainer";
import ProductCard from "../../components/productCard";
import { Link } from "react-router-dom";
import ProductContext from "../../context/productsContext";

const Category = () => {
  
  let { id } = useParams();
  const { products } = useContext(ProductContext);
  let category = products.filter(data => data.category.toLowerCase()===id);
  
  return (
    
    <ArticleContainer>
      <h1>Usted está en la categoría: <span className="categoryId">{id}</span></h1>
      
      {category.map(product => {
        return (
          <Link className="clearLink" key={product.id} to={`/product/${product.id}`}>
            <ProductCard props={product ? product : ""} /> 
          </Link>
        )
      })}
    </ArticleContainer>
  )
};

export default Category;