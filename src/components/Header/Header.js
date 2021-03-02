import React from 'react';

import './Header.scss';

import Search from './Search/Search';
import TopBar from './TopBar/TopBar';

const Header = () => {
  return ( 
  <div className="page-header">
    <div className="page-header__background"></div>
    <div className="page-header__wrapper container">
      <TopBar/>
      <Search/>
    </div>
  </div> );
}
 
export default Header;