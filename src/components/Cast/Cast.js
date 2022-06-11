import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../../services/moviesAPI';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieID } = useParams();

  useEffect(() => {
    getCast(movieID)
      .then(response => setCast(response.data.cast))
      .catch(error => console.error(error));
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
