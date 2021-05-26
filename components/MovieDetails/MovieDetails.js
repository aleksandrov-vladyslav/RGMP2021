import React from 'react';
import { connect } from 'react-redux';

const MovieDetails = props => {

  return ( 
    <div className="movie-details" id="movie-details">
      <div className="movie-details__image-container">
        <img className="movie-details__image" src={props.selectedMovie.poster_path} />
      </div>
      <div className="movie-details__content">
        <div className="movie-details__title">
          <h1 className="movie-details__title-text">{props.selectedMovie.title}</h1>
          <div className="movie-details__rating">{props.selectedMovie.vote_average || 'N/A'}</div>
        </div>
        <p className="movie-details__oscar">Oscar winning Movie</p>
        <div className="movie-details__time">
          <p className="movie-details__year">{props.selectedMovie.release_date && props.selectedMovie.release_date.split('-')[0]}</p>
          <p className="movie-details__duration">{props.selectedMovie.runtime} min</p>
        </div>
        <p className="movie-details__overview">{props.selectedMovie.overview}</p>
      </div>
    </div> 
  );
}
 
const mapStateToProps = ({ selectedMovie }) => ({
  selectedMovie: selectedMovie.movieData
});

export default connect(
  mapStateToProps
)(MovieDetails);