import React, {useState} from 'react';
import {
  Route,
  Switch
} from "react-router-dom";

import Filter from './Filter/Filter';
import SearchCount from './SearchCount/SearchCount';
import MoviesList from './MoviesList/MoviesList';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

import './Main.scss';

import {data} from '../../mockData';

const Main = props => {
  const [moviesData, setMoviesData] = useState(data.movies);
  
  return ( 
  <div className="page-content">
    <div className="page-content__wrapper container">
        <Filter setMoviesData={setMoviesData} />
        <ErrorBoundary>
          <SearchCount/>
          <MoviesList moviesData={moviesData} setHeaderMovieId={props.setHeaderMovieId} />
        </ErrorBoundary>
        <Switch>
          <Route path={props.match.url + '/test'}>
            <h3>Please select a topic.</h3>
          </Route>
        </Switch>
    </div>
  </div> 
  );
}
 
export default Main;