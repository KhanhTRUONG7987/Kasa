import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Footer.css";
import logoFooter from "../assets/images/logo-footer.png";

const Footer = () => {
  return (
    <footer className="footer">
      <NavLink exact="true" to="/">
        <img src={logoFooter} alt="Kasa Logo" />
      </NavLink>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
