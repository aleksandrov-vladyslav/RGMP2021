import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

import './MovieCard.scss';
import InfoPopup from './InfoPopup/InfoPopup';
import DeleteMovieModal from '../../../modals/DeleteMovieMoval/DeleteMovieModal';
import EditMovieModal from '../../../modals/EditMovieModal/EditMovieModal';


const MovieCard = (props) => {
  let history = useHistory();

  const useToggle = (initialValue = false) => {
    const [flag, setFlag] = useState(initialValue)

    const toggle = useCallback(() => { // technically counts as 'use "useCallback" hooks' ;) Haven't found a good reason to use it otherwise
      setFlag(!flag)
    }, [flag])

    return [flag, toggle]
  } // custom toggle hook from presentation for task (5) ¯\_(ツ)_/¯

  const [isInfoPopupOpen, toggleInfoPopup] = useToggle(false);
  const [isDeleteModalOpen, toggleDeleteModal] = useToggle(false);
  const [isEditModalOpen, toggleEditModal] = useToggle(false);

  const handleImageClick = () => {
    window.scrollTo(0, 0)
    history.push("/movies/film/" + props.movieData.id);
  }

  return ( 
    <div className="movie-card">
      {isEditModalOpen && <EditMovieModal movieData={props.movieData} toggleEditModal={toggleEditModal} />}
      {isDeleteModalOpen && <DeleteMovieModal toggleDeleteModal={toggleDeleteModal}/>}
      <div className="movie-card__info-button" onClick={toggleInfoPopup}>•••</div>
      <InfoPopup 
        isInfoPopupOpen = {isInfoPopupOpen} 
        toggleInfoPopup = { toggleInfoPopup }
        toggleDeleteModal = { toggleDeleteModal }
        toggleEditModal = { toggleEditModal } 
      />
      <div className="movie-card__image-wrapper" onClick = {() => handleImageClick()}>
        <img className="movie-card__image" src={props.movieData.posterurl} />
      </div>
      <div className="movie-card__info">
        <div>
          <div className="movie-card__title">
            {props.movieData.title}
          </div>
          <div className="movie-card__genre">
            {props.movieData.genres.join(", ")}
          </div>
        </div>
        <div className="movie-card__year">
          {props.movieData.year}
        </div>
      </div>
    </div> 
  );
}

MovieCard.propTypes = {
  movieData: PropTypes.object.isRequired,
};
 
export default MovieCard;