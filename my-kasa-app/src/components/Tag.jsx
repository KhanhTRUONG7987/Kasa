import React from 'react';

function Tag({ dataId, data }) {
  const property = data.find((property) => property.id === dataId);

  if (!property) {
    return <div className="tag">Property not found.</div>;
  }

  return (
    <div className="tag-div">
      {property.tags.map((tag, index) => (
        <li key={index}>{tag}</li>
      ))}
    </div>
  );
}

export default Tag;
