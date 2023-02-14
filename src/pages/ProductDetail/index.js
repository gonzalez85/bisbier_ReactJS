import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ArticleContainer from "../../components/articleContainer";
import ProductCard from "../../components/productCard";
import axios from "axios";

const ProductDetail = () => {
  const detail=true;
  const [product, setProduct] = useState({});
  let { id } = useParams();
  useEffect(() => {
    axios("../data/products.json").then((res) =>
      setProduct(res.data[id])
    );
  }, [id]);
  return (
    <ArticleContainer>
      <h1>Detalle del produto</h1>
      <ProductCard props={product} detail={detail} />
    </ArticleContainer>
  )
};

export default ProductDetail