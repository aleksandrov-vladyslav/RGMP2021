import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

import './Filter.scss';

import { sortMovies, filterMovies } from '../../../redux/actions';

const Filter = props => {
  const handleFilterClick = (event) => {
    console.log(event.target.dataset.genre);
    props.filterMovies(event.target.dataset.genre);
  }

  const handleSortSelect = (event) => {
    const sortBy = event.target.value.split('-')[0];
    const sortOrder = event.target.value.split('-')[1];
    props.sortMovies(sortBy, sortOrder);
  }

  return ( 
    <div className="filter">
      <ul className="filter__categories-list" onClick={handleFilterClick}>
        <li className="filter__categories-item filter__categories-item--active">
          ALL
        </li>
        <li className="filter__categories-item" data-genre="Action">
          Action
        </li>
        <li className="filter__categories-item" data-genre="Drama">
          Drama
        </li>
        <li className="filter__categories-item" data-genre="Comedy">
          Comedy
        </li>
        <li className="filter__categories-item" data-genre="Fantasy">
          Fantasy
        </li>
      </ul>
      <div className="filter__select">
        <span className="filter__select-label">SORT BY</span>
        <select onChange={handleSortSelect} className="filter__select-dropdown" defaultValue="year-descending">
          <option value="release_date-desc">RELEASE DATE (older first)</option>
          <option value="release_date-asc">RELEASE DATE (newer first)</option>
          <option value="vote_average-asc">Rating (Higher first)</option>
          <option value="vote_average-desc">Rating (lower first)</option>
        </select>
      </div>
    </div> 
  );
}

const mapStateToProps = ({ movies }) => ({
  movies
});
  
const mapDispatchToProps = {
  sortMovies,
  filterMovies
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
