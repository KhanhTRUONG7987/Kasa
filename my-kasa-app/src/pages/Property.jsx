import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../data/properties.json";
import Carousel from "../components/Carousel";
import Tag from "../components/Tag";
import Collapse from "../components/Collapse";
import "../styles/Section.css";
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
  const { id } = useParams(); // access the `id` parameter from the URL
  const navigate = useNavigate();

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
      <div className="wrapper">
        <Carousel pictures={property.pictures} />

        <div className="property-details">
          <div className="title-div">
            <div className="title-text">{property.title}</div>
            <div className="location-text">{property.location}</div>
          </div>
        </div>
        <Tag className="tag-div" dataId={id} data={data} />
        <div className="host-rate-div">
          <div className="rate-div">
            {Array.from({ length: 5 }).map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill={
                  index < property.rating
                    ? "rgba(255, 96, 96, 1)"
                    : "rgba(227, 227, 227, 1)"
                }
              >
                <path d="M13.7212 0.843656C13.4728 0.328088 12.9479 0 12.3714 0C11.7949 0 11.2747 0.328088 11.0216 0.843656L8.00788 7.04452L1.27748 8.03816C0.715055 8.12253 0.246365 8.51623 0.0729491 9.05524C-0.100466 9.59424 0.0401406 10.1895 0.443215 10.5879L5.32697 15.4201L4.17399 22.2491C4.08025 22.8115 4.3146 23.3833 4.7786 23.7161C5.24261 24.0489 5.85659 24.0911 6.36278 23.8239L12.3761 20.6133L18.3894 23.8239C18.8956 24.0911 19.5096 24.0536 19.9736 23.7161C20.4376 23.3786 20.6719 22.8115 20.5782 22.2491L19.4205 15.4201L24.3043 10.5879C24.7073 10.1895 24.8526 9.59424 24.6745 9.05524C24.4964 8.51623 24.0324 8.12253 23.47 8.03816L16.7349 7.04452L13.7212 0.843656Z" />
              </svg>
            ))}
          </div>
          <div className="host-div">
            <div className="host-name">{property.host.name}</div>
            <div className="host-picture">
              <img src={property.host.picture} alt="Host" />
            </div>
          </div>
        </div>
        <div className="dropdowns">
          {dropdownData.map((data, index) => (
            <Collapse key={index} topBar={data.topBar}>
              {data.topBar === "Équipements" && data.contenu.includes(", ") ? (
                // Check if it's the "Équipements" section and is a list
                <ul className="contenu-ul">
                  {data.contenu.split(", ").map((item, i) => (
                    <li className="contenu-li" key={i}>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="contenu-p">{data.contenu}</p>
              )}
            </Collapse>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Property;
