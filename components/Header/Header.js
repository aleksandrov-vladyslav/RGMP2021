import React from 'react';

import Search from '../Search/Search';
import TopBar from '../TopBar/TopBar';
import MovieDetails from '../MovieDetails/MovieDetails';

const Header = props => {
  
  return ( 
  <div className={`page-header`}>
    <div className="page-header__background"></div>
    <div className="page-header__wrapper container">
      <TopBar details={props.details} />
      {props.details ? <MovieDetails /> : <Search/>}
    </div>
  </div> );
}
 
export default Header;