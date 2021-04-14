import React, { useState } from 'react';

import { Link, Route, Switch } from "react-router-dom";

import './TopBar.scss';

import SiteLogo from '../../common/SiteLogo/SiteLogo';
import Button from '../../common/Button/Button';
import AddMovieModal from '../../modals/AddMovieModal/AddMovieModal';

const TopBar = props => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const toggleAddModal = () => {
    setIsAddModalOpen(!isAddModalOpen)
  }

  return ( 
    <div className="top-bar">
      <SiteLogo/>
      <Switch>
        <Route exact path='/movies'>
          <Button classList="top-bar__add-movie-button" variant="medium" color="grey" onClick={toggleAddModal}>+ ADD MOVIE</Button>
        </Route>
        <Route exact path="/movies/film/:id">
          <Button classList="top-bar__back-to-search-button" variant="medium" color="grey">
            <Link to="/movies"> back to search</Link>
          </Button>
        </Route>
      </Switch>
      {isAddModalOpen && <AddMovieModal toggleAddModal={toggleAddModal} />}
    </div>
  );
}
 
export default TopBar;