import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../services/moviesAPI';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieID } = useParams();

  useEffect(() => {
    getReviews(movieID)
      .then(response => setReviews(response.data.results))
      .catch(error => console.error(error));
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
