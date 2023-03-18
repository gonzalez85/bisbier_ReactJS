import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <h3>Error 404:</h3>
      <p>La página a la que intenta acceder no está disponible o el producto buscado no existe.</p>
      <p><Link to="/">Haga click aquí para volver al inicio</Link></p>
    </>
  );
};

export default Error;