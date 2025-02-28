// src/App.jsx
import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import SearchResultsPage from './pages/SearchResultsPage';
import GenresPage from './pages/GenresPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/genres" element={<GenresPage />} />
      </Routes>
    </Router>
  );
};

export default App;
