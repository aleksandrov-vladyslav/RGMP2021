import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../../common/Button/Button';
import Modal from '../Modal/Modal';
import { editMovie } from '../../../redux/actions';

const EditMovieModal = (props) => {
  const {movieData} = props;
  const [formData, setFormData] = useState(movieData);

  const handleChange = (event) => {
    let data = Object.assign({}, formData); 
    data[event.target.name] = event.target.value;
    setFormData(data);
  }

  const formReset = event => {
    event.preventDefault();
    setFormData(movieData);
  }

  const formSubmit = event => {
    event.preventDefault();
    props.editMovie(formData);
    props.toggleEditModal();
  }

  return ( 
    <Modal toggleModal={props.toggleEditModal} title="EDIT MOVIE">
      <form onSubmit={formSubmit} className="modal__form modal-edit__form">
        <label className="modal__form-label" htmlFor="id">MOVIE ID</label>
        <input className="modal__form-input" type="text" 
          value={formData.id} name="id" id="id" disabled></input>

        <label className="modal__form-label" htmlFor="title">TITLE</label>
        <input className="modal__form-input" type="text" 
          value={formData.title} onChange={handleChange} 
          name="title" id="title"></input>

        <label className="modal__form-label" htmlFor="release_date">RELEASE DATE</label>
        <input className="modal__form-input" type="date" 
          value={formData.release_date} onChange={handleChange} 
          name="release_date" id="release_date"></input>

        <label className="modal__form-label" htmlFor="poster_path">MOVIE URL</label>
        <input className="modal__form-input" type="url" 
          value={formData.poster_path} onChange={handleChange} 
          name="poster_path" id="poster_path"></input>

        <label className="modal__form-label" htmlFor="genres">GENRE</label>
        <select onChange={handleChange} multiple={true} className="modal__form-input modal__form-select" name="genres" id="genres">
          <option value={["Comedy"]}>Comedy</option>
          <option value={["Drama"]}>Drama</option>
        </select>

        <label className="modal__form-label" htmlFor="overview">MOVIE OVERVIEW</label>
        <input className="modal__form-input" type="text" 
          value={formData.overview} onChange={handleChange} 
          name="overview" id="overview"></input>

        <label className="modal__form-label" htmlFor="runtime">RUNTIME</label>
        <input className="modal__form-input" type="number" 
          value={formData.runtime} onChange={handleChange} 
          name="runtime" id="runtime"></input>

        <div className="modal__buttons">
          <Button classList="modal__button modal-delete__confirm-button" 
                  color="red-transparent" 
                  variant="medium"
                  onClick={formReset}>
            Reset
          </Button>
          <Button classList="modal__button modal-delete__confirm-button" 
                  color="red" 
                  variant="medium">
            Save
          </Button>
        </div>
      </form>
    </Modal>   
  );
}

EditMovieModal.propTypes = {
  toggleEditModal: PropTypes.func.isRequired,
  movieData: PropTypes.object
};

const mapDispatchToProps = {
  editMovie
};

export default connect(
  null,
  mapDispatchToProps
)(EditMovieModal);