import { useParams } from "react-router";
import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../../components/productCard";
import ProductsContext from "../../context/productsContext";
import { CircularProgress } from "@mui/material";
import Error from "../Error";

const ProductDetail = () => {

  let { id } = useParams();
  const { products } = useContext(ProductsContext);
  const [loading, setLoading] = useState(false);
  const detail=true;
  const product = products[id]
  
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [id]);
  
  return (
    <article>
      <h1>Detalle del produto</h1>
      {loading ? (
        <div className="Spinner">
          <CircularProgress color="inherit" />
        </div>
      ) : product ? <ProductCard product={product} detail={detail} /> : <Error />}
    </article>
  );
};

export default ProductDetail;