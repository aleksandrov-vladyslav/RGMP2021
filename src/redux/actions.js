import { ACTIONS } from './actionTypes';

export const searchMovies = queryString => dispatch => {
  fetch('http://localhost:4000/movies?searchBy=title&search=' + queryString)
    .then(response => response.json())
    .then(response => dispatch({ type: ACTIONS.GET_MOVIES, payload: response.data}))
};

export const editMovie = movieData => dispatch => {
  fetch('http://localhost:4000/movies', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(movieData)
  })
    .then(() => dispatch({ type: ACTIONS.EDIT_MOVIE, payload: movieData}));
};

export const addMovie = movieData => dispatch => {
  fetch('http://localhost:4000/movies', {
    method: 'POST',
    body: JSON.stringify(movieData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(() => dispatch({ type: ACTIONS.ADD_MOVIE, payload: movieData}));
};

export const deleteMovie = id => dispatch => {
  fetch('http://localhost:4000/movies/' + id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(() => dispatch({ type: ACTIONS.DELETE_MOVIE, payload: id}));
};

export const searchMovieById = id => dispatch => {
  fetch('http://localhost:4000/movies/' + id)
    .then(response => response.json())
    .then(response => dispatch({ type: ACTIONS.GET_MOVIE, payload: response}))
};

export const sortMovies = (sortBy, sortOrder) => dispatch => {
  dispatch({type: ACTIONS.SORT_MOVIES, payload: {sortBy: sortBy, sortOrder: sortOrder}});
};

export const filterMovies = genre => dispatch => {
  dispatch({type: ACTIONS.FILTER_MOVIES, payload: genre});
};