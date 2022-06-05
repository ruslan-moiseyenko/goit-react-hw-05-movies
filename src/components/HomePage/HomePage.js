import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './HomePage.css';

// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//
//api.themoviedb.org/3/trending/movie/day?api_key=da20cf53e1f8df5e7c28db8c672e3f8f

export default function HomePage() {
  return (
    <>
      <main>
        <h1>Trending today</h1>
      </main>
      <ul>
        <li>
          <Link to="/movies/1">Movie 1</Link>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </>
  );
}
