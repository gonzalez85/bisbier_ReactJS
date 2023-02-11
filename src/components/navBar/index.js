import React from "react";
import './styles.css';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="nav">
      <li>
        <Link className="navLink" to={`/category/cervezas`}>Cervezas</Link>
      </li>
      <li>
        <Link className="navLink" to={`/category/barriles`}>Barriles</Link>   
      </li>
      <li>
        <Link className="navLink" to={`/category/choperas`}>Alquilá tu chopera</Link>
      </li>
      <li>
        <Link className="navLink" to={`/category/otros`}>Otros</Link>
      </li>
    </ul>
  );
};

export default NavBar;