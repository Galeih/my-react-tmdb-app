// src/pages/GenresPage.jsx
import React, { useEffect, useState } from 'react';
import { getGenres, getMoviesByGenre } from '../api/tmdb';
import MovieCard from '../components/MovieCard';

const GenresPage = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const data = await getGenres();
        setGenres(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des genres :', error);
      }
    };
    fetchGenres();
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!selectedGenre) return;
      try {
        const data = await getMoviesByGenre(selectedGenre);
        setMovies(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des films par genre :', error);
      }
    };
    fetchMovies();
  }, [selectedGenre]);

  return (
    <div>
      <h2>Choisissez un genre</h2>
      <select onChange={(e) => setSelectedGenre(e.target.value)} defaultValue="">
        <option value="" disabled>Sélectionner un genre</option>
        {genres.map((g) => (
          <option key={g.id} value={g.id}>
            {g.name}
          </option>
        ))}
      </select>

      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default GenresPage;
