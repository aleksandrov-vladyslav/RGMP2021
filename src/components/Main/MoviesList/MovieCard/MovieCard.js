import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './MovieCard.scss';
import InfoPopup from './InfoPopup/InfoPopup';
import DeleteMovieModal from '../../../modals/DeleteMovieMoval/DeleteMovieModal';
import EditMovieModal from '../../../modals/EditMovieModal/EditMovieModal';

class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isInfoPopupOpen: false,
      isDeleteModalOpen: false,
      isEditModalOpen: false
    }

    this.toggleInfoPopup = this.toggleInfoPopup.bind(this);
    this.toggleDeleteModal = this.toggleDeleteModal.bind(this);
    this.toggleEditModal = this.toggleEditModal.bind(this);
  }

  toggleInfoPopup() {
    this.setState({
      isInfoPopupOpen: !this.state.isInfoPopupOpen
    });
  }

  toggleDeleteModal() {
    this.setState({
      isDeleteModalOpen: !this.state.isDeleteModalOpen
    });
  }

  toggleEditModal() {
    this.setState({
      isEditModalOpen: !this.state.isEditModalOpen
    });
  }

  render() { 
    return ( 
      <div className="movie-card">
        <EditMovieModal toggleEditModal={this.toggleEditModal} isEditModalOpen={this.state.isEditModalOpen} />
        <DeleteMovieModal toggleDeleteModal={this.toggleDeleteModal} isDeleteModalOpen={this.state.isDeleteModalOpen}/>
        <div className="movie-card__info-button" onClick={this.toggleInfoPopup}>•••</div>
        <InfoPopup 
          isInfoPopupOpen = {this.state.isInfoPopupOpen} 
          toggleInfoPopup = { this.toggleInfoPopup }
          toggleDeleteModal = { this.toggleDeleteModal }
          toggleEditModal = { this.toggleEditModal } 
        />
        <div className="movie-card__image-wrapper">
          <img className="movie-card__image" src={this.props.img} />
        </div>
        <div className="movie-card__info">
          <div>
            <div className="movie-card__title">
              {this.props.title}
            </div>
            <div className="movie-card__genre">
              {this.props.genres.join(", ")}
            </div>
          </div>
          <div className="movie-card__year">
            {this.props.year}
          </div>
        </div>
      </div> 
    );
  }
}

MovieCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  year: PropTypes.string.isRequired
};
 
export default MovieCard;