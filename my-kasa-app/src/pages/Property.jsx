import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/properties.json';
import Carousel from '../components/Carousel';
import Tag from '../components/Tag';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Header.css';
import '../styles/Section.css';
import '../styles/Footer.css';
import '../styles/Tag.css'; 
import '../styles/Carousel.css'; 
import '../styles/PropertyPage.css'; 

const Property = () => {
  const { id } = useParams(); // Access the `id` parameter from the URL

  const property = data.find((property) => property.id === id);

  if (!property) {
    return <p>Property not found</p>;
  }

  return (
    <div className="property-page">
      <Header /> {/* Add the Header component */}
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

        <div className="rateDiv">
          {Array.from({ length: 5 }).map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              width="196"
              height="36"
              viewBox="0 0 196 36"
              fill={index < property.rating ? 'rgba(255, 96, 96, 1)' : 'rgba(227, 227, 227, 1)'}
            >
              {/* SVG path for the star icon */}
            </svg>
          ))}
        </div>

        {property.tags.map((tag, index) => (
          <Tag key={index} dataId={property.id} properties={data} />
        ))}
      </div>
      <Footer /> {/* Add the Footer component */}
    </div>
  );
};

export default Property;
