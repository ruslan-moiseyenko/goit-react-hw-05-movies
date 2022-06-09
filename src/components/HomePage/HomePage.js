import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const axios = require('axios').default;

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(
          'http://api.themoviedb.org/3/trending/movie/day?api_key=da20cf53e1f8df5e7c28db8c672e3f8f'
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, []);

  return (
    <>
      <main>
        <h1>Trending today</h1>
      </main>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
