import React from 'react';
import './Loader.css'; // Make sure this file contains the CSS you provided

const Loader = () => {
  return (
    <div className="loader" id="loader">
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;