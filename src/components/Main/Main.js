import React, {useState} from 'react';

import Filter from './Filter/Filter';
import SearchCount from './SearchCount/SearchCount';
import MoviesList from './MoviesList/MoviesList';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

import './Main.scss';

import {data} from '../../mockData';

const Main = () => {
  const [moviesData, setMoviesData] = useState(data.movies);
  
  return ( 
  <div className="page-content">
    <div className="page-content__wrapper container">
      <Filter setMoviesData={setMoviesData} />
      <ErrorBoundary>
        <SearchCount/>
        <MoviesList moviesData={moviesData} />
      </ErrorBoundary>
    </div>
  </div> 
  );
}
 
export default Main;