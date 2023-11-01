import React from "react";
import { NavLink } from "react-router-dom";
import ErrorPage from "../components/NotFound";
import "../styles/Section.css";
import "../styles/ErrorPage.css";

function NotFound() {
  return (
    <div className="error-page">
      <main className="not-found-container">
        <ErrorPage />
        <div className="not-found-text">
          <p>Oups! La page que vous demandez n'existe pas.</p>
          <NavLink exact="true" to="/">
            Retourner sur la page d’accueil
          </NavLink>
        </div>
      </main>
    </div>
  );
}

export default NotFound;
