import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link, Outlet } from 'react-router-dom';
import { getMovie } from '../../services/moviesAPI';
import './MovieDetailsPage.css';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const { movieID } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  useEffect(() => {
    getMovie(movieID)
      .then(response => {
        setLoading(false);
        setMovie(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieID]);

  return (
    <>
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
          <div className="container">
            <button className="goBackBtn" onClick={goBack}>
              {' '}
              &larr;Go back
            </button>
            <div className="movies__wrapper">
              <div className="movies__poster">
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                      : 'https://via.placeholder.com/500x750'
                  }
                  alt={movie.title}
                  className="movies__img"
                />
              </div>
              <div className="movies__details">
                <h1>{movie.title}</h1>
                <p>User average vote: {movie.vote_average}</p>
                <div className="movie__overview">
                  <h2>Overview</h2>
                  <p>{movie.overview}</p>
                </div>
                <div className="movies__genres">
                  {movie.genres.map(({ name }) => (
                    <span className="movie__genre" key={name}>
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="add__info">
              <h3>Additional information</h3>
              <ul className="add__links">
                <li className="add__item">
                  <Link to={`/movies/${movieID}/cast`}>Cast</Link>
                </li>
                <li className="add__item">
                  <Link to={`/movies/${movieID}/reviews`}>Reviews</Link>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <Outlet />
        </>
      )}
    </>
  );
}
