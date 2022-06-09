import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import './MoiviesPage.css';
import axios from 'axios';

export default function MoviesPage() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const onSubmitClick = e => {
    e.preventDefault();
    setSearchParams({ search: e.target.search.value });
    setSearch(e.target.search.value);
  };
  useEffect(() => {
    const oldSearch = searchParams.get('search') || '';
    setSearch(oldSearch);
  }, [searchParams]);

  useEffect(() => {
    if (search === '') {
      return;
    }
    async function getMovies() {
      try {
        const response = await axios.get(
          `http://api.themoviedb.org/3/search/movie?api_key=da20cf53e1f8df5e7c28db8c672e3f8f&query=${search}`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }
    getMovies();
  }, [search]);

  return (
    <>
      <div className="search__wrapper">
        <form className="movies__search" onSubmit={onSubmitClick}>
          <input type="search" name="search" placeholder="Search for a movie" />
          <input type="submit" value="Search" />
        </form>
        <div className="movies__list">
          <ul>
            {movies.map(({ id, title }) => (
              <li key={id}>
                <Link to={`/movies/${id}`}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
