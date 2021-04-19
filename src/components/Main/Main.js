import React, {useEffect, useState} from 'react';
import {
  Route,
  Switch
} from "react-router-dom";

import Filter from './Filter/Filter';
import SearchCount from './SearchCount/SearchCount';
import MoviesList from './MoviesList/MoviesList';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import {
  useLocation
} from "react-router-dom";

import './Main.scss';

import {getSearchResults} from '../../mockData';

const Main = () => {
  let location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    setSearchTerm(location.search.slice(1));
  }, [location.search]);

  useEffect(() => {
    setMoviesData(getSearchResults(searchTerm));
  }, [searchTerm]);

  
  return ( 
  <div className="page-content">
    <div className="page-content__wrapper container">
        <Filter setMoviesData={setMoviesData} />
        <Switch>
          <Route path='/movies/:searchString'>
            <ErrorBoundary>
              <SearchCount searchCount = {moviesData.length}/>
              <MoviesList moviesData={moviesData} />
            </ErrorBoundary>
          </Route>
          <Route exact path='/movies'>
            <p className="page-content__empty-message">Enter your search query</p>
          </Route>
        </Switch>
    </div>
  </div> 
  );
}
 
export default Main;