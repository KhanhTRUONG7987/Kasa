import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ErrorPage from "../components/NotFound";
import "../styles/Header.css";
import "../styles/Section.css";
import "../styles/Footer.css";
import "../styles/ErrorPage.css";

function NotFound() {
  return (
    <div className="ErrorPage">
      <Header />
      <main className="not-found-container">
        <ErrorPage />
        <div className="not-found-text">
          <p>Oups! La page que vous demandez n'existe pas.</p>
          {/* <a className="active" href="/">
            Retourner sur la page d’accueil
          </a> */}
          <NavLink exact="true" to="/">
            Retourner sur la page d’accueil
          </NavLink>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default NotFound;
