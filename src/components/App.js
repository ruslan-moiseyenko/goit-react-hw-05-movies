import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage/HomePage';
import MoviesPage from './MoviesPage/MoviesPage';

const navLinkActive = 'navLink--active';
const navLink = 'navLink';

export default function App() {
  return (
    <div className="App">
      <nav className="nav">
        <ul className="navList">
          <li className="navItem">
            <NavLink
              className={({ isActive }) => (isActive ? navLinkActive : navLink)}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink
              className={({ isActive }) => (isActive ? navLinkActive : navLink)}
              to="/movies"
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route element={<HomePage />} />
      </Routes>
    </div>
  );
}
