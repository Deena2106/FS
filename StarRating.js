import React, { useState } from 'react';

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseEnter = (starRating) => {
    setHoverRating(starRating);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (starRating) => {
    setRating(starRating);
  };

  const renderStars = () => {
    const starArray = [];
    for (let i = 1; i <= 5; i++) {
      let starClassName = 'star';
      if (i <= (hoverRating || rating)) {
        starClassName += ' filled';
      }
      starArray.push(
        <span
          key={i}
          className={starClassName}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(i)}
        ></span>
      );
    }
    return starArray;
  };

  return <div className="star-rating">{renderStars()}</div>;
};

export default StarRating;
