import React from "react";
import { Link } from "react-router-dom";
import data from "../data/properties.json";
import Card from "../components/Card";
import "../styles/Section.css";
import "../styles/Card.css";
import "../styles/HomePage.css";

function Home() {
  const selected = data.filter((property) => property);
  return (
    <div>
      <main className="home-page">
        <section className="section1">
          <img
            src={require("../assets/images/Image source 1.png")}
            alt="Section 1"
          />
          <p className="section-text">Chez vous, partout et ailleurs</p>
        </section>
        <div className="card-gallery-container">
          <div className="card-gallery">
            {selected.map((property) => (
              <Link to={`/property/${property.id}`} key={property.id}>
                <Card
                  image={property.cover}
                  title={property.title}
                  id={property.id}
                  className="card"
                />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
