import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <article>
      <h3>Error 404:</h3>
      <p>La página a la que intenta acceder no está disponible o el producto buscado no existe.</p>
      <p><Link to="/">Haga click aquí para volver al inicio</Link></p>
    </article>
  );
};

export default Error;