import React from 'react';

import './Filter.scss';

const Filter = () => {
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
        <div className="filter__select-dropdown">RELEASE DATE</div>
      </div>
    </div> 
  );
}
 
export default Filter;