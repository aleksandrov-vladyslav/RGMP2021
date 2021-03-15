import React, {useState} from 'react';
import PropTypes from 'prop-types';

import './MovieCard.scss';
import InfoPopup from './InfoPopup/InfoPopup';
import DeleteMovieModal from '../../../modals/DeleteMovieMoval/DeleteMovieModal';
import EditMovieModal from '../../../modals/EditMovieModal/EditMovieModal';


const MovieCard = (props) => {
  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const toggleInfoPopup = () => {
    setIsInfoPopupOpen(!isInfoPopupOpen);
  }

  const toggleDeleteModal = () => {
    setIsDeleteModalOpen(!IsDeleteModalOpen);
  }

  const toggleEditModal = () => {
    setIsEditModalOpen(!IsEditModalOpen);
  }

  return ( 
    // onClick = {() => {setHeaderMovieId(movieData.id)}}
    <div className="movie-card" >
      <EditMovieModal movieData={props.movieData} toggleEditModal={toggleEditModal} isEditModalOpen={isEditModalOpen} />
      <DeleteMovieModal toggleDeleteModal={toggleDeleteModal} isDeleteModalOpen={isDeleteModalOpen}/>
      <div className="movie-card__info-button" onClick={toggleInfoPopup}>•••</div>
      <InfoPopup 
        isInfoPopupOpen = {isInfoPopupOpen} 
        toggleInfoPopup = { toggleInfoPopup }
        toggleDeleteModal = { toggleDeleteModal }
        toggleEditModal = { toggleEditModal } 
      />
      <div className="movie-card__image-wrapper">
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