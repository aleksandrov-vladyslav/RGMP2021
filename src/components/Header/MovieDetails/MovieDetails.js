import React from 'react';

import './MovieDetails.scss';

const MovieDetails = props => {
  return ( 
    <div className="movie-details">
      {props.headerMovieId}
      <div className="movie-details__image-container">
        <img className="movie-details__image" src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SY500_CR0,0,300,500_AL_.jpg" />
      </div>
      <div className="movie-details__content">
        <div className="movie-details__title">
          <h1 className="movie-details__title-text">Pulp Fiction</h1>
          <div className="movie-details__rating">4.3</div>
        </div>
        <p className="movie-details__oscar">Oscar winning Movie</p>
        <div className="movie-details__time">
          <p className="movie-details__year">1994</p>
          <p className="movie-details__duration">154 min</p>
        </div>
        <p className="movie-details__overview">Tarantino wrote Pulp Fiction in 1992 and 1993, incorporating scenes that Avary originally wrote for True Romance (1993)[citation needed]. Its plot occurs out of chronological order. The film is also self-referential from its opening moments, beginning with a title card that gives two dictionary definitions of "pulp". Considerable screen time is devoted to monologues and casual conversations with eclectic dialogue revealing each character's perspectives on several subjects, and the film features an ironic combination of humor and strong violence. TriStar Pictures reportedly turned down the script as "too demented". Then Miramax co-chairman Harvey Weinstein was enthralled, however, and the film became the first that Miramax fully financed.</p>
      </div>
    </div> 
  );
}
 
export default MovieDetails;