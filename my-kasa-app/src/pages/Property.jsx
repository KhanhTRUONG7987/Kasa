import React from 'react';
import { useParams } from 'react-router-dom';

const Property = () => {
  const { id } = useParams(); // Access the `id` parameter from the URL

  return (
    <div>
      <h1>Property Details</h1>
      <p>Display property details for ID: {id}</p>
      {/* Property details content goes here */}
    </div>
  );
};

export default Property;
