import React from 'react';
import PropTypes from 'prop-types';

import './MovieCard.scss';

const MovieCard = (props) => {
  return ( 
    <div className="movie-card">
      <div className="movie-card__image-wrapper">
        <img className="movie-card__image" src={props.img} />
      </div>
      <div className="movie-card__info">
        <div>
          <div className="movie-card__title">
            {props.title}
          </div>
          <div className="movie-card__genre">
            {props.genre}
          </div>
        </div>
        <div className="movie-card__year">
          {props.year}
        </div>
      </div>
    </div> 
  );
}

MovieCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired
};
 
export default MovieCard;