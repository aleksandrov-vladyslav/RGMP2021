import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const InfoPopup = (props) => {
  const handleOutsideClick = event => {
    if (!event.target.closest('.info-popup') && props.isInfoPopupOpen) {
      props.toggleInfoPopup();
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  });

  const handleButtonClick = callback => {
    props.toggleInfoPopup();
    callback();
  }

  return ( 
  <div className={`movie-card__info-popup info-popup ${props.isInfoPopupOpen ? 'visible' : 'hidden'}`}>
    <div className="info-popup__button-close" onClick = {props.toggleInfoPopup}>
      x
    </div>
    <div className="info-popup__button info-popup__button-edit" onClick={() => handleButtonClick(props.toggleEditModal)}>
      Edit
    </div>
    <div className="info-popup__button info-popup__button-delete" onClick={() => handleButtonClick(props.toggleDeleteModal)}>
      Delete
    </div>
  </div> );
}

InfoPopup.propTypes = {
  isInfoPopupOpen: PropTypes.bool,
  toggleInfoPopup: PropTypes.func,
  toggleDeleteModal: PropTypes.func
};
 
export default InfoPopup;