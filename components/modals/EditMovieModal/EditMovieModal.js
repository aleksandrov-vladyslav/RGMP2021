import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Button from '../../Button/Button';
import Modal from '../Modal/Modal';
import { editMovie } from '../../../actions';

const EditMovieModal = (props) => {
  const {movieData} = props;

  const formik = useFormik({
    initialValues: {
      id: movieData.id,
      title: movieData.title, 
      release_date: movieData.release_date,
      genres: movieData.genres,
      poster_path: movieData.poster_path,
      overview: movieData.overview,
      runtime: movieData.runtime
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .required('Title is required'),
      release_date: Yup.date()
        .required('Release date is required'),
      poster_path: Yup.string()
        .url()
        .required('URL to the poster is required.'),
      genres: Yup.array()
        .required('Pleace specify genre(s)'),
      overview: Yup.string()
        .required('Overview is required'),
      runtime: Yup.number()
        .positive('Runtime should be bigger than 0')
        .required('Runtime is required'),
    }),
    onSubmit: values => {
      event.preventDefault();
      props.editMovie(values);
      props.toggleEditModal();
    },
  });

  return ( 
    <Modal toggleModal={props.toggleEditModal} title="EDIT MOVIE">
      <form onSubmit={formik.handleSubmit} className="modal__form modal-edit__form">
        <label className="modal__form-label" htmlFor="id">MOVIE ID</label>
        <input 
          className="modal__form-input" 
          type="text" 
          name="id" 
          id="id" 
          disabled 
          value={formik.values.id}
        />

        <label className="modal__form-label" htmlFor="title">TITLE</label>
        <input 
          className="modal__form-input" 
          type="text" 
          name="title" 
          id="title" 
          onChange={formik.handleChange}
          value={formik.values.title}
        />

        <label className="modal__form-label" htmlFor="release_date">RELEASE DATE</label>
        <input 
          className="modal__form-input" 
          type="date" 
          name="release_date" 
          id="release_date" 
          onChange={formik.handleChange}
          value={formik.values.release_date}
        />

        <label className="modal__form-label" htmlFor="poster_path">MOVIE URL</label>
        <input 
          className="modal__form-input" 
          type="url" 
          name="poster_path" 
          id="poster_path" 
          onChange={formik.handleChange}
          value={formik.values.poster_path}
        />

        <label className="modal__form-label" htmlFor="genres">GENRE</label>
        <select 
          multiple={true} 
          className="modal__form-input modal__form-select" 
          name="genres" 
          id="genres"
          onChange={formik.handleChange}
          value={formik.values.genres}>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Romance">Romance</option>
        </select>

        <label className="modal__form-label" htmlFor="overview">MOVIE OVERVIEW</label>
        <input 
          className="modal__form-input" 
          type="text" 
          name="overview" 
          id="overview" 
          onChange={formik.handleChange}
          value={formik.values.overview}
        />

        <label className="modal__form-label" htmlFor="runtime">RUNTIME</label>
        <input 
          className="modal__form-input" 
          type="number" 
          name="runtime" 
          id="runtime"
          onChange={formik.handleChange}
          value={formik.values.runtime}
        />
        {Object
          .entries(formik.errors)
          .map(([key, value]) => <p key={key} className="modal__form-error">{value}</p>)
        }

        <div className="modal__buttons">
          <Button classList="modal__button modal-delete__confirm-button" 
                  color="red-transparent" 
                  variant="medium"
                  onClick={formik.handleReset}>
            Reset
          </Button>
          <Button classList="modal__button modal-delete__confirm-button" 
                  color="red" 
                  variant="medium"
                  type="submit">
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