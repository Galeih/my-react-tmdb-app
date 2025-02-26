// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    // On redirige vers la page de résultats avec un paramètre
    navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    setSearchTerm('');
  };

  return (
    <nav className="navbar">
      <Link to="/">Accueil</Link>
      <Link to="/genres">Genres</Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Rechercher un film, acteur, etc."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <Link to="/favorites">Favoris</Link>
    </nav>
  );
};

export default Navbar;
