import React, { useContext, useEffect, useState } from "react";
import ArticleContainer from "../../components/articleContainer";
import CartProductCard from "../../components/cartProductCard";
import CartProductsContext from "../../context/cartProductsContext";
import CounterContext from "../../context/counterContext";
import "./styles.css"
import { CircularProgress } from "@mui/material";
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import OrderConfirm from "../../components/orderConfirm";

const CartProducts = () => {
  
  const { cartProducts, setCartProducts } = useContext(CartProductsContext)
  const { counters, setCounters } = useContext(CounterContext)
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");
  const totalPrice = cartProducts.map(product => +product.price*counters["counterCart"+product.id]).reduce((a, b) => a + b, 0);
  const totalQty = cartProducts.map(product => +counters["counterCart"+product.id]).reduce((a, b) => a + b, 0);
  
  const order = { "products": [...cartProducts],"totalPrice": totalPrice, "totalQty": totalQty }
  const [orderConfirmed, setOrderConfirmed] = useState(order);
  // const counterId = "counterCart"+product.id
  
  // newCounters[counterId] = 0

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const buyAction = async () => {
    const docRef = await addDoc(collection(db, "orders"), {
      order,
    });
    setOrderId(docRef.id);
    console.log("Order: ",orderConfirmed);
    setOrderConfirmed(order)
    // setCartProducts([]);
    console.log("Order ID: ",orderId);
    console.log("Order: ",orderConfirmed);
    // setValues(initialState);
  };

  return (
    <ArticleContainer>
      <h1>{orderId ? "Gracias por tu compra!" : "Carrito de compras" }</h1>
      {loading ? (
        <div className="Spinner">
          <CircularProgress color="inherit" />
        </div>) 
      : <div className="cartProductsContainer">
          {cartProducts.length ? cartProducts.map(product => 
            <CartProductCard key={product.id} product={product} />
          ) 
          : 
          orderId ? <OrderConfirm orderId={orderId} products={orderConfirmed.products} totalPrice={orderConfirmed.totalPrice} /> : "Tu carrito se encuentra vacío"}
        {cartProducts.length 
          ? 
          <div className="cartProductsResume">
          <span className="cartProductsTotalPrice">Total: ${totalPrice}</span>
          <button href="#" className="btnBuy" onClick={() => {buyAction();setCartProducts([])}}>
            Finalizar Compra
          </button> 
          {/* {orderId ? <MessageSuccess orderId={orderId} /> : null} */}
        </div>
          : 
          null}
      </div>}
    </ArticleContainer>
  )
};

export default CartProducts;