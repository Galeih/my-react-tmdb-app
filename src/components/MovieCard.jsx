// src/components/MovieCard.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../context/FavoritesContext';

const MovieCard = ({ movie }) => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p>Date de sortie : {movie.release_date}</p>
      <button onClick={() => toggleFavorite(movie)}>
        {isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
      </button>
      <Link to={`/movie/${movie.id}`}>Détails</Link>
    </div>
  );
};

export default MovieCard;
