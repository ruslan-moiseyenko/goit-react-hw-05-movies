import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const axios = require('axios').default;

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieID } = useParams();

  useEffect(() => {
    async function getCast() {
      try {
        const response = await axios.get(
          `http://api.themoviedb.org/3/movie/${movieID}/credits?api_key=da20cf53e1f8df5e7c28db8c672e3f8f`
        );
        setCast(response.data.cast);
      } catch (error) {
        console.error(error);
      }
    }
    getCast();
  }, [movieID]);

  return (
    <div className="cast">
      <ul className="cast__list">
        {cast.map(({ name, character, profile_path, credit_id }) => (
          <li className="cast__item" key={credit_id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                  : `https://via.placeholder.com/200x300`
              }
              alt={name}
              className="cast__img"
            />
            <div className="cast__details">
              <h3>{name}</h3>
              <p>{character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
