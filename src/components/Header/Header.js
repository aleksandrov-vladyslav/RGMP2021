import React from 'react';

import './Header.scss';

import Search from './Search/Search';
import TopBar from './TopBar/TopBar';
import MovieDetails from './MovieDetails/MovieDetails';

const Header = props => {
  return ( 
  <div className="page-header is--details">
    <div className="page-header__background"></div>
    <div className="page-header__wrapper container">
      <TopBar/>
      <Search/>
      <MovieDetails headerMovieId={props.headerMovieId}/>
    </div>
  </div> );
}
 
export default Header;