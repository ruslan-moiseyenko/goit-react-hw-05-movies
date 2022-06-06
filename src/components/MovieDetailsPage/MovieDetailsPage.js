import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './MovieDetailsPage.css';
const axios = require('axios').default;

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const { movieID } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(
          `http://api.themoviedb.org/3/movie/${movieID}?api_key=da20cf53e1f8df5e7c28db8c672e3f8f`
        );
        setMovie(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
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
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
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
          </div>
          <hr />
        </>
      )}
    </>
  );
}
