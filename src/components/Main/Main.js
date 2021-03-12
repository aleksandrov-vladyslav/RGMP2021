import React from 'react';

import Filter from './Filter/Filter';
import SearchCount from './SearchCount/SearchCount';
import MoviesList from './MoviesList/MoviesList';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

import './Main.scss';

const Main = () => {
  return ( 
  <div className="page-content">
    <div className="page-content__wrapper container">
      <Filter/>
      <ErrorBoundary>
        <SearchCount/>
        <MoviesList/>
      </ErrorBoundary>
    </div>
  </div> 
  );
}
 
export default Main;