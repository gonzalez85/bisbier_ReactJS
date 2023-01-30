import React from "react";
import './styles.css';

const NavBar = ({ title, url }) => {
  return (
  <ul className="nav">
    <li>
        <a className="navLink active" aria-current="page" href={`${url}`}>{title}</a>
    </li>
    <li>
        <a className="navLink" href="#">Barriles</a>
    </li>
    <li>
        <a className="navLink" href="#">Alquilá tu chopera</a>
    </li>
    <li>
        <a className="navLink" href="#">Otros</a>
    </li>
    </ul>
    );
};

export default NavBar;