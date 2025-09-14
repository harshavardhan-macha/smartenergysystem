import React from 'react';
import { FiZap } from 'react-icons/fi'; // Using react-icons for lightning symbol

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-box">
        <FiZap className="loading-icon" />
        <p className="loading-text">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
