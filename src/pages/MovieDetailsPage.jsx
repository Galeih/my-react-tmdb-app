// src/pages/MovieDetailsPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../api/tmdb';
import RatingStars from '../components/RatingStars';
import Comments from '../components/Comments';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (error) {
        console.error('Erreur lors de la récupération du film :', error);
      }
    };
    fetchDetails();
  }, [id]);

  if (!movie) return <div>Chargement...</div>;

  const { title, overview, credits, poster_path, vote_average } = movie;

  return (
    <div className="movie-details">
      <h2>{title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
        alt={title}
      />
      <p><strong>Synopsis : </strong>{overview}</p>
      <p><strong>Note globale (TMDB) :</strong> {vote_average}</p>
      <RatingStars movieId={id} />
      
      <h3>Acteurs Principaux :</h3>
      {credits?.cast?.slice(0, 5).map((actor) => (
        <p key={actor.cast_id}>{actor.name} dans le rôle de {actor.character}</p>
      ))}

      <Comments movieId={id} />
    </div>
  );
};

export default MovieDetailsPage;
