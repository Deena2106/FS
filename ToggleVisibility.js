import React, { useState } from 'react';

const ToggleVisibility = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <h2>Toggle Visibility</h2>
      <button onClick={handleToggleVisibility}>
        {isVisible ? 'Hide Text' : 'Show Text'}
      </button>
      {isVisible && <p>This text is now visible!</p>}
    </div>
  );
};

export default ToggleVisibility;
