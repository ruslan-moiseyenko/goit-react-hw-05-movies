import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const axios = require('axios').default;

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieID } = useParams();

  useEffect(() => {
    async function getCast() {
      try {
        const response = await axios.get(
          `http://api.themoviedb.org/3/movie/${movieID}/reviews?api_key=da20cf53e1f8df5e7c28db8c672e3f8f`
        );
        setReviews(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }
    getCast();
  }, [movieID]);

  return (
    <div className="reviews">
      <ul className="reviews__list">
        {reviews.length < 1 ? (
          <p>We don't have any reviews yet</p>
        ) : (
          reviews.map(({ author, content, id }) => (
            <li className="reviews__item" key={id}>
              <h3 className="reviews__author">{author}</h3>
              <p className="reviews__content">{content}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
