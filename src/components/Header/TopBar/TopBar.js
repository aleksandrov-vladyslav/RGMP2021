import React, { useState } from 'react';

import './TopBar.scss';

import SiteLogo from '../../common/SiteLogo/SiteLogo';
import Button from '../../common/Button/Button';
import AddMovieModal from '../../modals/AddMovieModal/AddMovieModal';

const TopBar = props => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const toggleAddModal = () => {
    setIsAddModalOpen(!isAddModalOpen)
  }

  const toggleHeaderView = () => {
    props.setHeaderView('search');
    props.setHeaderMovieId(0);
  }

  return ( 
    <div className="top-bar">
      <SiteLogo/>
      <Button classList="top-bar__add-movie-button" variant="medium" color="grey" onClick={toggleAddModal}>+ ADD MOVIE</Button>
      <Button classList="top-bar__back-to-search-button" variant="medium" color="grey" onClick={() => toggleHeaderView()}> back to search</Button>
      <AddMovieModal toggleAddModal={toggleAddModal} isAddModalOpen={isAddModalOpen} />
    </div>
  );
}
 
export default TopBar;