import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../../common/Button/Button';
import Modal from '../Modal/Modal';
import { addMovie } from '../../../redux/actions';

const AddMovieModal = (props) => {
  const [formData, setFormData] = useState({genres: ['action']});

  const handleChange = (event) => {
    let data = Object.assign({}, formData); 
    if (event.target.name === "runtime") {
      data[event.target.name] = Number(event.target.value);
    } else {
      data[event.target.name] = event.target.value;
    }
    setFormData(data);
  }

  const formReset = event => {
    event.preventDefault();
    setFormData(movieData);
  }

  const formSubmit = event => {
    event.preventDefault();
    props.addMovie(formData);
    props.toggleAddModal();
  }

  return ( 
    <Modal toggleModal={props.toggleAddModal} title="ADD MOVIE">
      <form onSubmit={formSubmit} className="modal__form modal-add__form">
        <label className="modal__form-label" htmlFor="title">TITLE</label>
        <input className="modal__form-input" type="text" 
          onChange={handleChange} 
          name="title" id="title"></input>

        <label className="modal__form-label" htmlFor="release_date">RELEASE DATE</label>
        <input className="modal__form-input" type="date" 
          onChange={handleChange} 
          name="release_date" id="release_date"></input>

        <label className="modal__form-label" htmlFor="poster_path">MOVIE URL</label>
        <input className="modal__form-input" type="url" 
          onChange={handleChange} 
          name="poster_path" id="poster_path"></input>

        <label className="modal__form-label" htmlFor="genres">GENRE</label>
        <select multiple className="modal__form-input modal__form-select" name="genres" id="genres">
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
        </select>

        <label className="modal__form-label" htmlFor="overview">MOVIE OVERVIEW</label>
        <input className="modal__form-input" type="text" 
          onChange={handleChange} 
          name="overview" id="overview"></input>

        <label className="modal__form-label" htmlFor="runtime">RUNTIME</label>
        <input className="modal__form-input" type="number" 
          onChange={handleChange} 
          name="runtime" id="runtime"></input>
        
        <div className="modal__buttons">
          <Button classList="modal__button modal-delete__confirm-button" 
                  color="red-transparent" 
                  variant="big"
                  onClick={formReset}>
            Reset
          </Button>
          <Button classList="modal__button modal-delete__confirm-button" 
                  color="red" 
                  variant="big">
            Submit
          </Button>
        </div>
      </form>
    </Modal>
  );
}

AddMovieModal.propTypes = {
  toggleAddModal: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  addMovie
};

export default connect(
  null,
  mapDispatchToProps
)(AddMovieModal);