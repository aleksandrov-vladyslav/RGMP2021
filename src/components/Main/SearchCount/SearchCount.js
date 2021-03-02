import React from 'react';
import PropTypes from 'prop-types';

import './SearchCount.scss';

const SearchCount = (props) => {
  return ( 
    <div className="search-count">
      <span className="search-count__number">{props.count}</span>
      <span className="search-count__label"> movies found</span>
    </div> 
  );
}

SearchCount.propTypes = {
  count: PropTypes.number.isRequired
};
 
export default SearchCount;