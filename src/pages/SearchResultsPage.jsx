// src/pages/SearchResultsPage.jsx
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { multiSearch } from '../api/tmdb';
import MovieCard from '../components/MovieCard';

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        setLoading(true);
        const data = await multiSearch(query);
        setResults(data);
      } catch (error) {
        console.error('Erreur de recherche :', error);
      } finally {
        setLoading(false);
      }
    };
    if (query) {
      fetchSearchResults();
    }
  }, [query]);

  return (
    <div>
      <h2>Résultats pour : {query}</h2>
      {loading && <p>Chargement...</p>}
      <div className="results-list">
        {results
          .filter((item) => item.media_type === 'movie') // Par exemple, on n'affiche que les films
          .map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
        ))}
        {/* Si vous voulez gérer les séries, acteurs, etc, vous pouvez créer d’autres composants */}
      </div>
    </div>
  );
};

export default SearchResultsPage;
