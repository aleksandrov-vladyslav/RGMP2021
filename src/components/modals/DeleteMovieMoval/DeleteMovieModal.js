import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../common/Button/Button';
import Modal from '../Modal/Modal';

const DeleteMovieModal = (props) => {
  return ( 
    <Modal toggleModal={props.toggleDeleteModal}
           title="DELETE MOVIE"
           text="Are you sure you want to delete this movie?">
      <div className="modal__buttons">
        <Button classList="modal__button modal-delete__confirm-button" 
                color="red" 
                variant="big">
          Confirm
        </Button>
      </div>
    </Modal>
  );
}
 
export default DeleteMovieModal;

DeleteMovieModal.propTypes = {
  toggleDeleteModal: PropTypes.func.isRequired
};