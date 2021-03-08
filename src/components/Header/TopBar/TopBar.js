import React, { Component } from 'react';

import './TopBar.scss';

import SiteLogo from '../../common/SiteLogo/SiteLogo';
import Button from '../../common/Button/Button';
import AddMovieModal from '../../modals/AddMovieModal/AddMovieModal';

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isAddModalOpen: false
    }

    this.toggleAddModal = this.toggleAddModal.bind(this);
  }

  toggleAddModal() {
    this.setState({
      isAddModalOpen: !this.state.isAddModalOpen
    });
  }

  render() { 
    return ( 
      <div className="top-bar">
        <SiteLogo/>
        <Button variant="medium" color="grey" onClick={this.toggleAddModal}>+ ADD MOVIE</Button>
        <AddMovieModal toggleAddModal={this.toggleAddModal} isAddModalOpen={this.state.isAddModalOpen} />
      </div>
    );
  }
}
 
export default TopBar;