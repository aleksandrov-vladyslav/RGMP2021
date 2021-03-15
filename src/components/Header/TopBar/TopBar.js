import React, { useState } from 'react';

import './TopBar.scss';

import SiteLogo from '../../common/SiteLogo/SiteLogo';
import Button from '../../common/Button/Button';
import AddMovieModal from '../../modals/AddMovieModal/AddMovieModal';

const TopBar = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const toggleAddModal = () => {
    setIsAddModalOpen(!isAddModalOpen)
  }

  return ( 
    <div className="top-bar">
      <SiteLogo/>
      <Button variant="medium" color="grey" onClick={toggleAddModal}>+ ADD MOVIE</Button>
      <AddMovieModal toggleAddModal={toggleAddModal} isAddModalOpen={isAddModalOpen} />
    </div>
  );
}
 
export default TopBar;