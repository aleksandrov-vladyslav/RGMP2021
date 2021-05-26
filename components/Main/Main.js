import React from 'react';

import Filter from '../Filter/Filter';
import MoviesList from '../MoviesList/MoviesList';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const Main = () => {
  return ( 
  <div className="page-content">
    <div className="page-content__wrapper container">
      <Filter />
      <ErrorBoundary>
        <MoviesList />
      </ErrorBoundary>
    </div>
  </div> 
  );
}

export default Main;