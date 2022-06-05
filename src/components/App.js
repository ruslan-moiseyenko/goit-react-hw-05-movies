import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage/HomePage';
import MoviesPage from './MoviesPage/MoviesPage';
import Navigation from './Navigation/Navigation';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
