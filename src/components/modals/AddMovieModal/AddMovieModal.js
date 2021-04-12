import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../common/Button/Button';
import Modal from '../Modal/Modal';

const AddMovieModal = (props) => {
  return ( 
    <Modal toggleModal={props.toggleAddModal} title="ADD MOVIE">
      <form className="modal__form modal-add__form">
        <label className="modal__form-label" htmlFor="movie_title">TITLE</label>
        <input className="modal__form-input" type="text" placeholder="Movie title here" id="movie_title"></input>
        <label className="modal__form-label" htmlFor="movie_date">RELEASE DATE</label>
        <input className="modal__form-input" type="date" placeholder="Select date" id="movie_date"></input>
        <label className="modal__form-label" htmlFor="movie_url">MOVIE URL</label>
        <input className="modal__form-input" type="url" placeholder="Movie URL here" id="movie_url"></input>
        <label className="modal__form-label" htmlFor="movie_genre">GENRE</label>
        <select className="modal__form-input" placeholder="Select genre" id="movie_genre">
          <option>comedy</option>
        </select>
        <label className="modal__form-label" htmlFor="movie_overview">MOVIE OVERVIEW</label>
        <input className="modal__form-input" type="text" placeholder="Overview here" id="movie_overview"></input>
        <label className="modal__form-label" htmlFor="movie_runtime">RUNTIME</label>
        <input className="modal__form-input" type="text" placeholder="Runtime here" id="movie_runtime"></input>
      </form>
      <div className="modal__buttons">
        <Button classList="modal__button modal-delete__confirm-button" 
                color="red-transparent" 
                variant="big">
          Reset
        </Button>
        <Button classList="modal__button modal-delete__confirm-button" 
                color="red" 
                variant="big">
          Submit
        </Button>
      </div>
    </Modal>
  );
}
 
export default AddMovieModal;

AddMovieModal.propTypes = {
  toggleAddModal: PropTypes.func.isRequired
};