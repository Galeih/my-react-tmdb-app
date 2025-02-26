// src/components/RatingStars.jsx
import React, { useState, useEffect } from 'react';

const RatingStars = ({ movieId }) => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    // Charger la note depuis localStorage s'il y en a une
    const storedRating = localStorage.getItem(`rating-${movieId}`);
    if (storedRating) {
      setRating(Number(storedRating));
    }
  }, [movieId]);

  const handleRating = (value) => {
    if (value === rating) {
      // Si on clique sur la même valeur, on retire la note
      setRating(0);
      localStorage.removeItem(`rating-${movieId}`);
    } else {
      setRating(value);
      localStorage.setItem(`rating-${movieId}`, value);
    }
  };

  return (
    <div>
      <p>Votre note :</p>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
        className={star <= rating ? 'active' : ''}
          key={star}
          style={{
            fontSize: '1.5rem',
            color: star <= rating ? 'gold' : 'gray',
            cursor: 'pointer',
          }}
          onClick={() => handleRating(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default RatingStars;
