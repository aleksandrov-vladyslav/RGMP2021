import React from 'react';
import MovieCard from './MovieCard/MovieCard';

import './MoviesList.scss';

import {data, getGenres} from '../../../mockData';

const MoviesList = () => {
  getGenres();
  const movieCards = data.movies.map(movie => {
    return <MovieCard
      key={movie.id}        
      img={movie.posterurl}
      title={movie.title}
      genres={movie.genres}
      year={movie.year}
      />
  })
  return ( 
    <div className="movies-list">
      {movieCards}
    </div> 
  );
}
 
export default MoviesList;