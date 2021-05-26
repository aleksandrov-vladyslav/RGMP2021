import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Button from '../../Button/Button';
import Modal from '../Modal/Modal';
import { addMovie } from '../../../actions';

const AddMovieModal = (props) => {
  return ( 
    <Modal toggleModal={props.toggleAddModal} title="ADD MOVIE">
      <Formik
        initialValues={
          { 
            title: '', 
            release_date: '',
            genres: [],
            poster_path: '',
            overview: '',
            runtime: ''
          }
        }
        validationSchema={Yup.object({
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
        })}
        onSubmit={(values) => {
          event.preventDefault();
          props.addMovie(values);
          props.toggleAddModal();
        }}
      >
        <Form>
          <label className="modal__form-label" htmlFor="title">TITLE</label>
          <Field 
            type="text" 
            name="title" 
            className="modal__form-input" />

          <label className="modal__form-label" htmlFor="release_date">RELEASE DATE</label>
          <Field 
            type="date" 
            name="release_date" 
            className="modal__form-input"/>

          <label className="modal__form-label" htmlFor="poster_path">MOVIE URL</label>
          <Field 
            type="text" 
            name="poster_path" 
            className="modal__form-input"/>

          <label className="modal__form-label" htmlFor="genres">GENRE</label>
          <Field 
            name="genres" 
            as="select"
            className="modal__form-input modal__form-select"
            multiple={true}>
              <option value="Action">Action</option>
              <option value="Adventure">Adventure</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Romance">Romance</option>
          </Field>

          <label className="modal__form-label" htmlFor="overview">MOVIE OVERVIEW</label>
          <Field 
            type="text" 
            name="overview" 
            className="modal__form-input"/>

          <label className="modal__form-label" htmlFor="runtime">RUNTIME</label>
          <Field 
            type="number" 
            name="runtime" 
            className="modal__form-input"/>

          <ErrorMessage name="title" component="p" className="modal__form-error"/>
          <ErrorMessage name="release_date" component="p" className="modal__form-error"/>
          <ErrorMessage name="poster_path" component="p" className="modal__form-error"/>
          <ErrorMessage name="genres" component="p" className="modal__form-error"/>
          <ErrorMessage name="overview" component="p" className="modal__form-error"/>
          <ErrorMessage name="runtime" component="p" className="modal__form-error"/>

          <div className="modal__buttons">
            <Button 
              classList="modal__button modal-delete__confirm-button" 
              color="red-transparent" 
              variant="big"
              onClick={props.toggleAddModal}>
                Cancel
            </Button>
            <Button 
              classList="modal__button modal-delete__confirm-button" 
              color="red" 
              variant="big"
              type="submit">
                Submit
            </Button>
          </div>
        </Form>
      </Formik>
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