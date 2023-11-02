import React, { useState } from "react";
import "../styles/Carousel.css";

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? prevIndex : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <div
        className="carousel-images"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {pictures.map((image, index) => (
          <div
            key={index}
            className={`carousel-image ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img src={image} alt={`#${index + 1}`} />
            <p className="carousel-index">
              {currentIndex + 1}/{pictures.length}
            </p>
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <div className="carousel-control prev" onClick={handlePrevClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="80"
            viewBox="0 0 48 80"
            fill="none"
          >
            <path
              d="M47.0399 7.42497L39.9199 0.344971L0.359863 39.945L39.9599 79.545L47.0399 72.465L14.5199 39.945L47.0399 7.42497Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="carousel-control next" onClick={handleNextClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="81"
            viewBox="0 0 48 81"
            fill="none"
          >
            <path
              d="M0.959961 72.9877L8.03996 80.0677L47.64 40.4677L8.03996 0.867676L0.959961 7.94768L33.48 40.4677L0.959961 72.9877Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
