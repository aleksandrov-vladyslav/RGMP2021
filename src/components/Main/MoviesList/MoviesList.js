import React from 'react';
import { ProgressPlugin } from 'webpack';
import MovieCard from './MovieCard/MovieCard';

import './MoviesList.scss';

const MoviesList = props => {

  return ( 
    <div className="movies-list">
      {props.moviesData.map(movieData => {
        return <MovieCard
          key={movieData.id}
          movieData={movieData}
          setHeaderMovieId={props.setHeaderMovieId}
          />
      })}
    </div> 
  );
}
 
export default MoviesList;