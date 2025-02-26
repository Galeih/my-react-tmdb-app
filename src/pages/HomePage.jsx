// src/pages/HomePage.jsx
import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from '../api/tmdb';
import MovieCard from '../components/MovieCard';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (error) {
        console.error('Erreur', error);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <div className="home-page">
      <h2>Films Tendance</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
