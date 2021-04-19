import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";

import './MovieDetails.scss';
import {getMovieById} from '../../../mockData';

const MovieDetails = props => {
  let history = useHistory();
  
  const [headerMovieData, setHeaderMovieData] = useState({});

  let movieId = props.match?.params.id || 0;

  useEffect(() => {
    if (movieId) {
      setHeaderMovieData(getMovieById(movieId));
    } else {
      history.push('/movies');
    }
  }, [movieId]);

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