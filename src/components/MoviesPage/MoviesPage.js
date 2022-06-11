import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import './MoiviesPage.css';
import { getMovies } from '../services/moviesAPI';

export default function MoviesPage() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const onSubmitClick = e => {
    e.preventDefault();
    const { value } = e.target.search;
    setSearch(value);
    setSearchParams({ search: value });
  };
  useEffect(() => {
    const oldSearch = searchParams.get('search') || '';
    setSearch(oldSearch);
  }, [searchParams]);

  useEffect(() => {
    if (search === '') {
      return;
    }

    getMovies(search).then(response => {
      setMovies(response.data.results);
    });
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
