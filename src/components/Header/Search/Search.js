import React, {useState} from 'react';
import Button from '../../common/Button/Button';
import { useHistory } from "react-router-dom";

import './Search.scss';

const Search = () => {
  let history = useHistory();

  const [searchTerm, setSearchTerm] = useState('');

  const searchInputHandler = e => {
    setSearchTerm(e.target.value.trim());
  }

  const searchButtonHandler = () => {
    history.push("/movies/search?" + searchTerm);
  }
  
  return ( 
  <div className="search">
    <h1 className="search__title">
      FIND YOUR MOVIE
    </h1>
    <div className="search-form">
      <input className="search-form__input" 
             type="search" 
             placeholder="What do you want to watch?"
             onChange={(e) => searchInputHandler(e)}/>   
      <Button classList="search-form__button" color="red" variant="big" onClick={() => searchButtonHandler()}>SEARCH</Button>
    </div>
  </div> 
  );
}
 
export default Search;