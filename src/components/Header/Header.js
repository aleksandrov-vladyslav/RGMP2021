import React from 'react';
import {
  Route,
  Switch
} from "react-router-dom";

import './Header.scss';

import Search from './Search/Search';
import TopBar from './TopBar/TopBar';
import MovieDetails from './MovieDetails/MovieDetails';

const Header = props => {

  return ( 
  <div className={`page-header`}>
    <div className="page-header__background"></div>
    <div className="page-header__wrapper container">
      <TopBar />
      <Switch>
        <Route exact path="/movies">
          <Search/>
        </Route>
        <Route
          path='/movies/film/:id'
          render={(props) => (
            <MovieDetails {...props} />
          )}
        />
        <MovieDetails />
      </Switch>
    </div>
  </div> );
}
 
export default Header;