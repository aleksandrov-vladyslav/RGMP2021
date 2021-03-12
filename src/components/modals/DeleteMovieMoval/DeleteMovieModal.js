import React, {useEffect} from 'react';

import Button from '../../common/Button/Button';

const DeleteMovieModal = (props) => {
  const handleOutsideClick = event => {
    if (!event.target.closest('.modal__content') && props.isDeleteModalOpen) {
      props.toggleDeleteModal();
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  });

  return ( 
    <div className={`modal modal-delete ${props.isDeleteModalOpen ? 'visible' : 'hidden'}`}>
      <div className="modal__background"></div>
      <div className="modal__content">
        <h1 className="modal__title">DELETE MOVIE</h1>
        <p className="modal__text">Are you sure you want to delete this movie?</p>
        <div className="modal__buttons">
          <Button classList="modal__button modal-delete__confirm-button" 
                  color="red" 
                  variant="big">
            Confirm
          </Button>
        </div>
        <div className="modal__close-button" onClick={props.toggleDeleteModal}>x</div>
      </div>
    </div> 
  );
}
 
export default DeleteMovieModal;