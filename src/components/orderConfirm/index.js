import React from "react";
import CartProductCard from "../cartProductCard";
import "./styles.css"


const OrderConfirm = ({ orderId, owner, products, totalPrice }) => {
	return (
		<>
			<div className="orderIdMessage">
				<p>Felicidades <strong>{owner.name}</strong>!</p>
				<p>La transacción <span className="orderId">{orderId}</span> se ha procesado correctamente.</p>
				<p>Un detalle de su compra fue enviado a: <strong>{owner.email}</strong></p>
			</div>
			<h3>Detalle de su compra:</h3>
			{products.map(product => <CartProductCard key={product.id} product={product} isConfirmed={true} />)}
			<div className="orderResume">
        <span className="orderTotal">Total: ${totalPrice}</span>
      </div>
		</>
	);
};

export default OrderConfirm;
