import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ArticleContainer from "../../components/articleContainer";
import ProductCard from "../../components/productCard";
import axios from "axios";
import { Link } from "react-router-dom";

const Category = () => {
  const [filterCategory, setFilterCategory] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    axios("../data/products.json").then((res) =>
      setFilterCategory(res.data.filter(data => 
        data.category.toLowerCase()===id)
        )
    );
  }, [id]);
  return (
    <ArticleContainer>
      <h1>Usted está en la categoría: <span className="categoryId">{id}</span></h1>
      {filterCategory.map(product => {
        return (
          <Link className="clearLink" key={product.id} to={`/product/${product.id}`}>
            <ProductCard props={product} /> 
          </Link>
        )
      })}
    </ArticleContainer>
  )
}

export default Category