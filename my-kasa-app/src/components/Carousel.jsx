import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
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
            <div className="image-index">
              {index + 1}/{pictures.length}
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <div className="carousel-control prev" onClick={handlePrevClick}>
        <FontAwesomeIcon color="#fff" icon={faAngleLeft} />{" "}
          {/* Previous icon */}
        </div>
        <div className="carousel-control next" onClick={handleNextClick}>
          <FontAwesomeIcon color="#fff" icon={faAngleRight} />{" "}
          {/* Next icon */}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
