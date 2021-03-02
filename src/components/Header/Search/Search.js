import React from 'react';
import Button from '../../common/Button/Button';

import './Search.scss';

const Search = () => {
  return ( 
  <div className="search">
    <h1 className="search__title">
      FIND YOUR MOVIE
    </h1>
    <div className="search-form">
      <input className="search-form__input" type="search" placeholder="What do you want to watch?"></input>
      <Button classList="search-form__button" color="red" variant="big">SEARCH</Button>
    </div>
  </div> 
  );
}
 
export default Search;