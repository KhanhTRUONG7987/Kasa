import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/Collapse.css";

const Collapse = ({ children, topBar }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (!event.target.closest(".collapse-div")) {
        // If the click is not within the Collapse component, close it
        setIsOpen(false);
      }
    };

    if (isOpen) {
      // Add the event listener if the Collapse is open
      document.addEventListener("click", handleDocumentClick);
    } else {
      // Remove the event listener if the Collapse is closed
      document.removeEventListener("click", handleDocumentClick);
    }

    return () => {
      // Cleanup by removing the event listener when the component unmounts
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isOpen]);

  return (
    <div className="collapse-div">
      <div onClick={toggleCollapse} className={`section-header ${isOpen ? "active" : ""}`}>
        {topBar}
        <svg
          className={`svg-collapse ${isOpen ? "svg-collapse-down" : "svg-collapse-up"}`}
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="14"
          viewBox="0 0 25 14"
          fill="none"
        >
          <path
            d="M13.2103 13.8522C12.5409 14.5216 11.4538 14.5216 10.7843 13.8522L0.502064 3.56991C-0.167355 2.90049 -0.167355 1.81335 0.502064 1.14393C1.17148 0.474515 2.25862 0.474515 2.92804 1.14393L12 10.2159L21.072 1.14929C21.7414 0.479871 22.8285 0.479871 23.4979 1.14929C24.1674 1.81871 24.1674 2.90585 23.4979 3.57526L13.2157 13.8575L13.2103 13.8522Z"
            fill="white"
          />
        </svg>
      </div>
      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>{children}</div>
    </div>
  );
};

Collapse.propTypes = {
  children: PropTypes.node,
  topBar: PropTypes.string,
};

export default Collapse;
