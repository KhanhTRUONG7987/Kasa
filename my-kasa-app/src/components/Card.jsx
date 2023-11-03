import React from "react";
import "../styles/Card.css";

const Card = ({ image, title }) => {
  return (
    <div className="card">
      <div className="card-component">
        <img className="card-image" src={image} alt={title} />
        <div className="card-overlay"></div>
        <p className="card-title">{title}</p>
      </div>
    </div>
  );
};

export default Card;
