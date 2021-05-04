import React from 'react';
import {
  Route,
  Switch
} from "react-router-dom";

import Filter from './Filter/Filter';
import MoviesList from './MoviesList/MoviesList';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

import './Main.scss';

const Main = () => {
  return ( 
  <div className="page-content">
    <div className="page-content__wrapper container">
      <Filter />
      <Switch>
        <Route path='/movies/:searchString'>
          <ErrorBoundary>
            <MoviesList />
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