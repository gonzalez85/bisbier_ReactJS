import React from "react";
import './styles.css';
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="nav">
      <li>
        <NavLink 
          className={({ isActive }) => (isActive ? "navLink active" : "navLink")} 
          to={`/category/cervezas`}
        >
          Cervezas
        </NavLink>
      </li>
      <li>
        <NavLink 
          className={({ isActive }) => (isActive ? "navLink active" : "navLink")} 
          to={`/category/barriles`}
        >
          Barriles
        </NavLink>   
      </li>
      <li>
        <NavLink 
          className={({ isActive }) => (isActive ? "navLink active" : "navLink")} 
          to={`/category/choperas`}
        >
          Alquilá tu chopera
        </NavLink>
      </li>
      <li>
        <NavLink 
          className={({ isActive }) => (isActive ? "navLink active" : "navLink")} 
          to={`/category/otros`}
        >
          Otros
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBar;