import React from 'react';
import MovieCard from './MovieCard/MovieCard';

import './MoviesList.scss';

const MoviesList = ({moviesData}) => {

  return ( 
    <div className="movies-list">
      {moviesData.map(movie => {
        return <MovieCard
          key={movie.id}        
          img={movie.posterurl}
          title={movie.title}
          genres={movie.genres}
          year={movie.year}
          />
      })}
    </div> 
  );
}
 
export default MoviesList;