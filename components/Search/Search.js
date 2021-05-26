import React, {useState} from 'react';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import { useRouter } from 'next/router'

import { searchMovies } from '../../actions';

const Search = props => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter()

  const searchInputHandler = e => {
    setSearchTerm(e.target.value.trim());
  }

  const searchButtonHandler = () => {
    props.searchMovies(searchTerm);
    router.push('/search/' + searchTerm);
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
