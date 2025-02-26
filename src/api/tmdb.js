// src/api/tmdb.js
import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY; // clé API TMDB
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'fr-FR',
  },
});

/**
 * Récupère les films tendance (ou populaires)
 */
export const getTrendingMovies = async () => {
  const response = await tmdbApi.get('/trending/movie/week');
  return response.data.results;
};

/**
 * Récupère les détails d’un film par ID
 */
export const getMovieDetails = async (movieId) => {
  const response = await tmdbApi.get(`/movie/${movieId}`, {
    params: {
      append_to_response: 'credits', // pour avoir la liste des acteurs
    },
  });
  return response.data;
};

/**
 * Recherche simple de films par titre
 */
export const searchMovies = async (query) => {
  const response = await tmdbApi.get('/search/movie', {
    params: {
      query,
    },
  });
  return response.data.results;
};

/**
 * Recherche multiple (films, séries, acteurs, etc.)
 */
export const multiSearch = async (query) => {
  const response = await tmdbApi.get('/search/multi', {
    params: {
      query,
    },
  });
  return response.data.results;
};

/**
 * Liste des genres
 */
export const getGenres = async () => {
  const response = await tmdbApi.get('/genre/movie/list');
  return response.data.genres; // { id, name }
};

/**
 * Films par genre
 */
export const getMoviesByGenre = async (genreId) => {
  const response = await tmdbApi.get('/discover/movie', {
    params: {
      with_genres: genreId,
    },
  });
  return response.data.results;
};
