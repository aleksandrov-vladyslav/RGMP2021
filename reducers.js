import { combineReducers } from 'redux'
import { ACTIONS } from './types';

const initialMoviesState = [];

export function movies(state = initialMoviesState, action) {
  switch (action.type) {
    case ACTIONS.GET_MOVIES:
      return action.payload;
    case ACTIONS.SET_MOVIES:
      return action.payload;
    case ACTIONS.EDIT_MOVIE:
      return [...state.filter(movie => movie.id !== action.payload.id), action.payload];
    case ACTIONS.ADD_MOVIE:
      return [...state, action.payload];
    case ACTIONS.DELETE_MOVIE:
      return state.filter(movie => movie.id !== action.payload);
    case ACTIONS.SORT_MOVIES:
      return [...state].sort((a, b) => {
        if (action.payload.sortOrder === 'desc') {
          if (a[action.payload.sortBy] < b[action.payload.sortBy]) {
            return -1;
          }
          if (a[action.payload.sortBy] > b[action.payload.sortBy]) {
            return 1
          }
          return 0;
        }
      
        if (action.payload.sortOrder === 'asc') {
          if (a[action.payload.sortBy] > b[action.payload.sortBy]) {
            return -1;
          }
          if (a[action.payload.sortBy] < b[action.payload.sortBy]) {
            return 1
          }
          return 0;
        }
      });
    case ACTIONS.FILTER_MOVIES: {
      return state.filter(movie => movie.genres.includes(action.payload));
    }
    default: return state;
  }
}

const initialSelectedState = {id: '', movieData: {}};

export function selectedMovie(state = initialSelectedState, action) {
  switch (action.type) {
    case ACTIONS.GET_MOVIE:
      return Object.assign({}, state, {movieData: action.payload});
    case ACTIONS.SET_ID:
      return Object.assign({}, state, {id: action.payload});
    default: return state;
  }
}

// COMBINED REDUCERS
const reducers = {
  movies: movies,
  selectedMovie: selectedMovie,
}

export default combineReducers(reducers)
