import React from 'react';
import '../styles/Card.css';

const Card = ({ image, title }) => {
  return (
    <div className="card">
      <div className="card-overlay">
        <p className="card-title">{title}</p>
        <img className="card-image" src={image} alt={title} />
      </div>
    </div>
  );
}

export default Card;
