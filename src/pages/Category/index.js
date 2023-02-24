import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import ArticleContainer from "../../components/articleContainer";
import ProductCard from "../../components/productCard";
import ProductContext from "../../context/productsContext";
import CounterContext from "../../context/counterContext";

const Category = () => {
  
  let { id } = useParams();
  const { products } = useContext(ProductContext);
  const { counters, setCounters } = useContext(CounterContext);
  let category = products.filter(data => data.category.toLowerCase()===id);
  
  let countersCategory = {}
  category.map(e => countersCategory["counter"+e.id] = e.quantity)
  console.log(countersCategory)
  
  useEffect(() => {
      setCounters(countersCategory)
  }, []);

  // setCounters(countersCategory)
  // array1.map(el => [el.values.forEach(value => array2.push({type:el.type, value})), el][1])
  // console.log(array2);

  return (
    
    <ArticleContainer>
      <h1>Usted está en la categoría: <span className="categoryId">{id}</span></h1>
      
      {category.map(product => {
        return (
          <ProductCard key={product.id} product={product ? product : ""} countersCategory={countersCategory} /> 
        )
      })}
    </ArticleContainer>
  )
};

export default Category;