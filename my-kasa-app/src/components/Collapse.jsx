import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome icons
import "../styles/Collapse.css";

const Collapse = ({ children, topBar }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='collapseDiv'>
      <button onClick={toggleCollapse} className="section-header">
      {topBar}
        {isOpen ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleUp} />}
      </button>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
};

Collapse.propTypes = {
  children: PropTypes.node,
  topBar: PropTypes.string,
};

export default Collapse;
