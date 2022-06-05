import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, useMatch } from 'react-router-dom';
import './HomePage.css';

const axios = require('axios').default;

// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//
//api.themoviedb.org/3/trending/movie/day?api_key=da20cf53e1f8df5e7c28db8c672e3f8f

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  const location = useLocation();
  // const useMatch = useMatch();

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(
          'http://api.themoviedb.org/3/trending/movie/day?api_key=da20cf53e1f8df5e7c28db8c672e3f8f'
        );
        setMovies(response.data.results);
        // console.log(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, []);

  // useEffect(() => {
  //   console.log(location.pathname);
  //   console.log(useMatch);
  // }, [location, useMatch]);

  return (
    <>
      {/* {console.log(props.match.url)} */}
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
