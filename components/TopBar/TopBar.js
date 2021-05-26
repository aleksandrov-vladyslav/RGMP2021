import React, { useState } from 'react';
import Link from 'next/link'

import SiteLogo from '../SiteLogo/SiteLogo';
import Button from '../Button/Button';
import AddMovieModal from '../modals/AddMovieModal/AddMovieModal';

const TopBar = props => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const toggleAddModal = () => {
    setIsAddModalOpen(!isAddModalOpen)
  }

  return ( 
    <div className="top-bar">
      <SiteLogo/>
      {props.details ? <Button classList="top-bar__back-to-search-button" variant="medium" color="grey">
        <Link href="/"> back to search</Link>
      </Button> : <Button classList="top-bar__add-movie-button" variant="medium" color="grey" onClick={toggleAddModal}>+ ADD MOVIE</Button>}
      {isAddModalOpen && <AddMovieModal toggleAddModal={toggleAddModal} />}
    </div>
  );
}
 
export default TopBar;