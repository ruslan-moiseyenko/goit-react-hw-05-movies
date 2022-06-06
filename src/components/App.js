import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage/HomePage';
import MoviesPage from './MoviesPage/MoviesPage';
import Navigation from './Navigation/Navigation';
import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieID" element={<MovieDetailsPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
