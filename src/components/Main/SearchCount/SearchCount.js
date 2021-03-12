import React from 'react';

import './SearchCount.scss';

import {getMovieCount} from '../../../mockData';

const SearchCount = () => {
  return ( 
    <div className="search-count">
      <span className="search-count__number">{getMovieCount()}</span>
      <span className="search-count__label"> movies found</span>
    </div> 
  );
}
 
export default SearchCount;