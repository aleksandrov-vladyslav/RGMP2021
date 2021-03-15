import React, {useState, useEffect} from 'react';

import './Header.scss';

import Search from './Search/Search';
import TopBar from './TopBar/TopBar';
import MovieDetails from './MovieDetails/MovieDetails';

const Header = props => {
  const [headerView, setHeaderView] = useState('search');

  useEffect(() => {
    if (props.headerMovieId !== 0) {
      setHeaderView('details');
    }
  }, [props.headerMovieId]);

  return ( 
  <div className={`page-header is--${headerView}`}>
    <div className="page-header__background"></div>
    <div className="page-header__wrapper container">
      <TopBar setHeaderMovieId={props.setHeaderMovieId} setHeaderView={setHeaderView}/>
      <Search/>
      <MovieDetails headerMovieId={props.headerMovieId}/>
    </div>
  </div> );
}
 
export default Header;