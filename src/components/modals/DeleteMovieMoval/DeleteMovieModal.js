import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../../common/Button/Button';
import Modal from '../Modal/Modal';
import { deleteMovie } from '../../../redux/actions';

const DeleteMovieModal = (props) => {
  const handleClick = () => {
    props.deleteMovie(props.movieId);
    props.toggleDeleteModal();
  }

  return ( 
    <Modal toggleModal={props.toggleDeleteModal}
           title="DELETE MOVIE"
           text="Are you sure you want to delete this movie?">
      <div className="modal__buttons">
        <Button classList="modal__button modal-delete__confirm-button" 
                color="red" 
                variant="big"
                onClick={handleClick}>
          Confirm
        </Button>
      </div>
    </Modal>
  );
}

DeleteMovieModal.propTypes = {
  toggleDeleteModal: PropTypes.func.isRequired,
  movieId: PropTypes.number.isRequired
};

const mapDispatchToProps = {
  deleteMovie
};

export default connect(
  null,
  mapDispatchToProps
)(DeleteMovieModal);