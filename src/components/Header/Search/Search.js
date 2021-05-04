import React, {useState} from 'react';
import Button from '../../common/Button/Button';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';

import { searchMovies} from '../../../redux/actions';

import './Search.scss';

const Search = props => {
  let history = useHistory();

  const [searchTerm, setSearchTerm] = useState('');

  const searchInputHandler = e => {
    setSearchTerm(e.target.value.trim());
  }

  const searchButtonHandler = () => {
    history.push("/movies/search?" + searchTerm);
    props.searchMovies(searchTerm);
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

const mapDispatchToProps = {
  searchMovies
};

export default connect(
  null,
  mapDispatchToProps
)(Search);
