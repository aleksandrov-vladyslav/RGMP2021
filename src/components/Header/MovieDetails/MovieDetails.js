import React, {useEffect, useState} from 'react';

import './MovieDetails.scss';
import {getMovieById} from '../../../mockData';

const MovieDetails = props => {
  const [headerMovieData, setHeaderMovieData] = useState({});

  useEffect(() => {
    setHeaderMovieData(getMovieById(props.match.params.id));
  }, [props.match.params.id]);

  return ( 
    <div className="movie-details" id="movie-details">
      <div className="movie-details__image-container">
        <img className="movie-details__image" src={headerMovieData?.posterurl} />
      </div>
      <div className="movie-details__content">
        <div className="movie-details__title">
          <h1 className="movie-details__title-text">{headerMovieData?.title}</h1>
          <div className="movie-details__rating">{headerMovieData?.imdbRating}</div>
        </div>
        <p className="movie-details__oscar">Oscar winning Movie</p>
        <div className="movie-details__time">
          <p className="movie-details__year">{headerMovieData?.year}</p>
          <p className="movie-details__duration">{headerMovieData?.duration}</p>
        </div>
        <p className="movie-details__overview">{headerMovieData?.overview}</p>
      </div>
    </div> 
  );
}
 
export default MovieDetails;