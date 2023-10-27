import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import '../styles/Carousel.css'; 


const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-images">
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
          <FontAwesomeIcon icon={faArrowAltCircleLeft} /> {/* Previous icon */}
        </div>
        <div className="carousel-control next" onClick={handleNextClick}>
          <FontAwesomeIcon icon={faArrowAltCircleRight} /> {/* Next icon */}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
