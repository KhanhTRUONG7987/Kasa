import React from "react";
import Collapse from "../components/Collapse";
import "../styles/Section.css";
import "../styles/Collapse.css";
import "../styles/AboutPage.css";

const aboutData = [
  {
    topBar: "Flabilité",
    contenu: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  {
    topBar: "Respect",
    contenu: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    topBar: "Service",
    contenu: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    topBar: "Sécurité",
    contenu: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

const About = () => {
  return (
    <div className="about-page">
      <main>
        <section className="section1">
          <img
            src={require("../assets/images/Image source 2.png")}
            alt="Section 1"
          />
          <div className="dropdowns">
            {aboutData.map((data, index) => (
              <Collapse key={index} topBar={data.topBar}>
                <p className="contenu-p">{data.contenu}</p>
              </Collapse>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
