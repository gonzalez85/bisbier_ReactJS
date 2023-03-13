import React from "react";
import CartProductCard from "../cartProductCard";
import "./styles.css"


const OrderConfirm = ({ orderId, products, totalPrice }) => {
console.log(products);
	return (
		<>
			<p className="orderIdMessage">Su id de transacción es: <span className="orderId">{orderId}</span></p>
			<h3>Detalle de su compra:</h3>
			{products.map(product => <CartProductCard key={product.id} product={product} isConfirmed={true} />)}
			<div className="cartProductsResume">
        <span className="cartProductsTotal">Total: ${totalPrice}</span>
      </div>
		</>
	);
};

export default OrderConfirm;
