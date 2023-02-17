import React, { useContext } from "react";
import { useParams } from "react-router";
import ArticleContainer from "../../components/articleContainer";
import ProductCard from "../../components/productCard";
import ProductContext from "../../context/productContext";

const ProductDetail = () => {

  let { id } = useParams();
  const { products } = useContext(ProductContext)
  const detail=true;

  return (
    <ArticleContainer>
      <h1>Detalle del produto</h1>
      <ProductCard props={products[id]} detail={detail} />
    </ArticleContainer>
  )
};

export default ProductDetail;