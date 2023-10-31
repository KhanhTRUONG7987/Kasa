import React from 'react';
import '../styles/Card.css';

const Card = ({ image, title }) => {
  return (
    <div className="card">
      <img className="card-image" src={image} alt={title} />
      <div className="card-overlay">
        <div className="card-title">{title}</div>
      </div>
    </div>
  );
}

export default Card;
