import React, { useContext, useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

import "./styles.css"

import CartProductCard from "../../components/cartProductCard";
import OrderConfirm from "../../components/orderConfirm";

import CartProductsContext from "../../context/cartProductsContext";
import CounterContext from "../../context/counterContext";

const emptyOwnerInfo = {
  name: "",
  email: "",
};

const CartProducts = () => {
  
  const { cartProducts, setCartProducts } = useContext(CartProductsContext)
  const { counters } = useContext(CounterContext)

  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [ownerInfo, setOwnerInfo] = useState(emptyOwnerInfo);
  
  const totalPrice = cartProducts.map(product => +product.price*counters["counterCart"+product.id]).reduce((a, b) => a + b, 0);
  const totalQty = cartProducts.map(product => +counters["counterCart"+product.id]).reduce((a, b) => a + b, 0);
  
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setOwnerInfo({ ...ownerInfo, [name]: value });
  };

  const order = { "owner": ownerInfo, "products": cartProducts, "totalPrice": totalPrice, "totalQty": totalQty }
  const [orderConfirmed, setOrderConfirmed] = useState(order);

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
    setOrderConfirmed(order)
  };

  return (
    <article>
      <h1>{orderId ? "Gracias por tu compra!" : "Carrito de compras" }</h1>
      

      {loading ? <CircularProgress color="inherit" />

        :

        <div className="cartProductsContainer">

        {cartProducts.length 
        
        ?
        <>
          <form className="contact_form">
            <legend>Datos del comprador</legend>
            <input id="name" type="text" placeholder="Nombre" name="name" value={ownerInfo.name} onChange={handleOnChange} />
            <input id="email" type="email" placeholder="E-mail" name="email" value={ownerInfo.email}  onChange={handleOnChange} />
          </form>
          {cartProducts.map(product => 
            <CartProductCard key={product.id} product={product} />) }
          <div className="cartProductsResume">
            <span className="cartProductsTotalPrice">Total: ${totalPrice}</span>
            {ownerInfo.name && ownerInfo.email != "" ? <button href="#" className={ownerInfo.name && ownerInfo.email != "" ? "btnBuy" : "btnBuyDisabled"} onClick={() => {buyAction();setCartProducts([])}}>
              Finalizar Compra
            </button> : <button href="#" className="btnBuyDisabled">
              Finalizar Compra
            </button> }
           
          </div>
        </>
          : 

            orderId ? <OrderConfirm orderId={orderId} owner={ownerInfo} products={orderConfirmed.products} totalPrice={orderConfirmed.totalPrice} /> 
              : 
              "Tu carrito se encuentra vacío"}

      </div>}
    </article>
  )
};

export default CartProducts;