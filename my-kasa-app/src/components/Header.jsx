import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "../styles/Header.css";

function Header() {
  return (
    <header>
      {/* <a className="active" href="/">
        <img src={logo} alt="Logo" />
      </a> */}
      <NavLink exact="true" to="/">
        <img src={logo} alt="Logo" />
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink exact="true" to="/">
              Accueil
            </NavLink>
          </li>

          <li>
            <NavLink exact="true" to="/about">
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
