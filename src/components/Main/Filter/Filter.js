import React from 'react';

import './Filter.scss';

import {data} from '../../../mockData';


const Filter = ({setMoviesData}) => {
  const sortMovies = (movieData, sortField, isAscending) => {
    let newData = [...movieData];
  
    if (isAscending) {
      newData = newData.sort((a,b) => {
        if(a[sortField] < b[sortField]) { return -1; }
        if(a[sortField] > b[sortField]) { return 1; }
        return 0;
      })
    } else {
      newData = newData.sort((a,b) => {
        if(a[sortField] > b[sortField]) { return -1; }
        if(a[sortField] < b[sortField]) { return 1; }
        return 0;
      })
    }
  
    return newData;
  }

  const handleSortSelect = (event) => {
    const sortOption = event.target.value.split('-')[0];
    const isAscending = event.target.value.split('-')[1] === 'ascending';
    setMoviesData(sortMovies(data.movies, sortOption, isAscending));
  }

  return ( 
    <div className="filter">
      <ul className="filter__categories-list">
        <li className="filter__categories-item filter__categories-item--active">
          ALL
        </li>
        <li className="filter__categories-item">
          DOCUMENTARY
        </li>
        <li className="filter__categories-item">
          COMEDY
        </li>
        <li className="filter__categories-item">
          HORROR
        </li>
        <li className="filter__categories-item">
          CRIME
        </li>
      </ul>
      <div className="filter__select">
        <span className="filter__select-label">SORT BY</span>
        <select onChange={handleSortSelect} className="filter__select-dropdown">
          <option value="year-ascending">RELEASE DATE (older first)</option>
          <option value="year-descending" selected>RELEASE DATE (newer first)</option>
          <option value="title-ascending">TITLE (A-Z)</option>
          <option value="title-descending">TITLE (Z-A)</option>
        </select>
      </div>
    </div> 
  );
}
 
export default Filter;