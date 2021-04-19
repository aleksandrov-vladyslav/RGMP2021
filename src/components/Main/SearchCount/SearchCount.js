import React from 'react';

import './SearchCount.scss';

const SearchCount = ({searchCount}) => {
  return ( 
    <div className="search-count">
      {searchCount !== 0 && 
        <>
          <span className="search-count__number">{searchCount}</span>
          <span className="search-count__label"> movies found</span>
        </>
      }
      {searchCount === 0 && <p className="search-count__no-result">No Movies Found</p>}
    </div> 
  );
}
 
export default SearchCount;