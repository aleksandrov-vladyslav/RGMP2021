import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../common/Button/Button';
import Modal from '../Modal/Modal';

const EditMovieModal = (props) => {
  const {movieData} = props;

  return ( 
    <Modal toggleModal={props.toggleEditModal} title="EDIT MOVIE">
      <form className="modal__form modal-edit__form">
        <label className="modal__form-label" htmlFor="movie_id">MOVIE ID</label>
        <input className="modal__form-input" type="text" defaultValue={movieData.id} id="movie_id" disabled></input>
        <label className="modal__form-label" htmlFor="movie_title">TITLE</label>
        <input className="modal__form-input" type="text" defaultValue={movieData.title} id="movie_title"></input>
        <label className="modal__form-label" htmlFor="movie_date">RELEASE DATE</label>
        <input className="modal__form-input" type="date" defaultValue={movieData.releaseDate} id="movie_date"></input>
        <label className="modal__form-label" htmlFor="movie_url">MOVIE URL</label>
        <input className="modal__form-input" type="url" defaultValue={movieData.posterurl} id="movie_url"></input>
        <label className="modal__form-label" htmlFor="movie_genre">GENRE</label>
        <select className="modal__form-input" id="movie_genre">
          <option>comedy</option>
        </select>
        <label className="modal__form-label" htmlFor="movie_overview">MOVIE OVERVIEW</label>
        <input className="modal__form-input" type="text" defaultValue="Overview text goes here" id="movie_overview"></input>
        <label className="modal__form-label" htmlFor="movie_runtime">RUNTIME</label>
        <input className="modal__form-input" type="text" defaultValue={movieData.duration} id="movie_runtime"></input>
      </form>
      <div className="modal__buttons">
        <Button classList="modal__button modal-Edit__confirm-button" 
                color="red-transparent" 
                variant="big">
          Reset
        </Button>
        <Button classList="modal__button modal-Edit__confirm-button" 
                color="red" 
                variant="big">
          Save
        </Button>
      </div>
    </Modal>   
  );
}
 
export default EditMovieModal;

EditMovieModal.propTypes = {
  toggleEditModal: PropTypes.func.isRequired,
  movieData: PropTypes.object.isRequired
};