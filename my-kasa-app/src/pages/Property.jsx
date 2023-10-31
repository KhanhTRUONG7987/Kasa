import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../data/properties.json";
import Carousel from "../components/Carousel";
import Tag from "../components/Tag";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";
import "../styles/Header.css";
import "../styles/Section.css";
import "../styles/Footer.css";
import "../styles/Tag.css";
import "../styles/Carousel.css";
import "../styles/PropertyPage.css";

const dropdownData = [
  {
    topBar: "Description",
    contenu:
      "Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). ",
  },
  {
    topBar: "Équipements",
    contenu:
      "Climatisation, Wi-Fi, Cuisine, Espace de travail, Fer à repasser, Sèche-cheveux, Cintres",
  },
];

const Property = () => {
  const { id } = useParams(); // Access the `id` parameter from the URL
  const navigate = useNavigate(); // Get the navigate function from React Router

  const property = data.find((property) => property.id === id);

  useEffect(() => {
    if (!property) {
      navigate("/404");
    }
  }, [property, navigate]);

  if (!property) {
    return null;
  }

  return (
    <div className="property-page">
      <Header />
      <div className="wrapper">
        <h1>{property.title}</h1>

        <Carousel pictures={property.pictures} />

        <div className="property-details">
          <div className="titleDiv">
            <div className="title-text">{property.title}</div>
            <div className="location-text">{property.location}</div>
          </div>

          <div className="hostDiv">
            <div className="host-name">{property.host.name}</div>
            <div className="host-picture">
              <img src={property.host.picture} alt="Host" />
            </div>
          </div>
        </div>
        <div className="tagRateDiv">
          <Tag dataId={id} data={data} />
          <div className="rateDiv">
            {Array.from({ length: 5 }).map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill={
                  index < property.rating
                    ? "rgba(255, 96, 96, 1)"
                    : "rgba(227, 227, 227, 1)"
                }
              >
                <path d="M18 2l4.3 9.7h10.7l-8.3 7.2 3.2 10.1-9-5.7-9 5.7 3.2-10.1-8.3-7.2h10.7z" />
              </svg>
            ))}
          </div>
        </div>

        <div className="dropdowns">
          {dropdownData.map((data, index) => (
            <Collapse key={index} topBar={data.topBar}>
              {data.topBar === "Équipements" && data.contenu.includes(", ") ? (
                // Check if it's the "Équipements" section and is a list
                <ul className="contenuP">
                  {data.contenu.split(", ").map((item, i) => (
                    <li className="contenuP" key={i}>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>{data.contenu}</p>
              )}
            </Collapse>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Property;
