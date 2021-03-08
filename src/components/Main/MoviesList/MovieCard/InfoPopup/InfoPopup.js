import React from 'react';
import PropTypes from 'prop-types';

import './InfoPopup.scss';

const InfoPopup = (props) => {
  return ( 
  <div className={`movie-card__info-popup info-popup ${props.isInfoPopupOpen ? 'visible' : 'hidden'}`}>
    <div className="info-popup__button-close" onClick = {props.toggleInfoPopup}>
      x
    </div>
    <div className="info-popup__button info-popup__button-edit" onClick={props.toggleEditModal}>
      Edit
    </div>
    <div className="info-popup__button info-popup__button-delete" onClick={props.toggleDeleteModal}>
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