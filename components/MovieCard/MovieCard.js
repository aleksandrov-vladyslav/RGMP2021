import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router'
import { connect } from 'react-redux';

import InfoPopup from '../InfoPopup/InfoPopup';
import DeleteMovieModal from '../modals/DeleteMovieMoval/DeleteMovieModal';
import EditMovieModal from '../modals/EditMovieModal/EditMovieModal';

import { setId, searchMovieById } from '.././../actions';


const MovieCard = (props) => {
  const router = useRouter()

  const useToggle = (initialValue = false) => {
    const [flag, setFlag] = useState(initialValue)

    const toggle = useCallback(() => {
      setFlag(!flag)
    }, [flag])

    return [flag, toggle]
  }

  const [isInfoPopupOpen, toggleInfoPopup] = useToggle(false);
  const [isDeleteModalOpen, toggleDeleteModal] = useToggle(false);
  const [isEditModalOpen, toggleEditModal] = useToggle(false);

  const handleImageClick = () => {
    window.scrollTo(0, 0)
    props.setId(props.movieData.id);
    props.searchMovieById(props.movieData.id);
    router.push('/film/' + props.movieData.id);
  }

  return ( 
    <div className="movie-card">
      {isEditModalOpen && <EditMovieModal movieData={props.movieData} toggleEditModal={toggleEditModal} />}
      {isDeleteModalOpen && <DeleteMovieModal movieId={props.movieData.id} toggleDeleteModal={toggleDeleteModal}/>}
      <div className="movie-card__info-button" onClick={toggleInfoPopup}>•••</div>
      <InfoPopup 
        isInfoPopupOpen = {isInfoPopupOpen} 
        toggleInfoPopup = { toggleInfoPopup }
        toggleDeleteModal = { toggleDeleteModal }
        toggleEditModal = { toggleEditModal } 
      />
      <div className="movie-card__image-wrapper" onClick = {() => handleImageClick()}>
        <img className="movie-card__image" src={props.movieData.poster_path} />
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
          {props.movieData.release_date.split('-')[0]}
        </div>
      </div>
    </div> 
  );
}

MovieCard.propTypes = {
  movieData: PropTypes.object.isRequired,
};

const mapDispatchToProps = {
  setId,
  searchMovieById
};

export default connect(
  null,
  mapDispatchToProps
)(MovieCard);
 