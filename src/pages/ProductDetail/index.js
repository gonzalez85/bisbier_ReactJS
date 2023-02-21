import { useParams } from "react-router";
import React, { useContext } from "react";
import ArticleContainer from "../../components/articleContainer";
import ProductCard from "../../components/productCard";
import ProductsContext from "../../context/productsContext";

const ProductDetail = () => {

  let { id } = useParams();
  const { products } = useContext(ProductsContext);
  const detail=true;
  const product = products[id]
  
  return (
    <ArticleContainer>
      <h1>Detalle del produto</h1>
      <ProductCard product={product ? product : ""} detail={detail} />
    </ArticleContainer>
  );
};

export default ProductDetail;