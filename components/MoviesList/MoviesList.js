import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { connect } from 'react-redux';

import SearchCount from '../SearchCount/SearchCount';

const MoviesList = props => {

  return (
    <>
      <SearchCount searchCount = {props.movies.length}/>
      <div className="movies-list">
        {props.movies.map(movie => {
          return <MovieCard
            key={movie.id}
            movieData={movie}
            />
        })}
      </div> 
    </>
  );
}
 
const mapStateToProps = ({ movies }) => ({
  movies
});

export default connect(
  mapStateToProps
)(MoviesList);