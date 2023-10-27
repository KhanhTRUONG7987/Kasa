import React from 'react';

function Tag({ dataId, properties }) {
  const property = properties.find((item) => item.id === dataId);

  if (!property) {
    return <div className="tag">Property not found.</div>;
  }

  return (
    <div className="tag">
      <p>Tags: {property.tags.join(', ')}</p>
    </div>
  );
}

export default Tag;
