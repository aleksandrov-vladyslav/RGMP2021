import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  handleOutsideClick(event) {
    if (!event.target.closest('.modal__content')) {
      this.props.toggleModal();
    }
  }

  componentDidMount() {
    document.addEventListener('mouseup', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mouseup', this.handleOutsideClick);
  }

  render() { 
    return ( 
      <div className="modal">
        <div className="modal__background"></div>
          <div className="modal__content">
            <h1 className="modal__title">{this.props.title}</h1>
            {this.props.text && <p className="modal__text">{this.props.text}</p>}
            {this.props.children}
            <div className="modal__close-button" onClick={this.props.toggleModal}>x</div>
        </div>
      </div> 
    );
  }
}
 
export default Modal;

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  toggleModal: PropTypes.func.isRequired
};