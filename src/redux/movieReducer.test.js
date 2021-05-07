import { movies } from './reducers';
import { ACTIONS } from './actionTypes';

describe('movie reducer', () => {
  it('should return the initial state', () => {
    expect(movies(undefined, {})).toEqual([])
  })

  it('should handle GET_MOVIES', () => {
    expect(
      movies([], {
        type: ACTIONS.GET_MOVIES,
        payload: ['movieData']
      })
    ).toEqual(['movieData'])
  })

  it('should handle EDIT_MOVIE', () => {
    expect(
      movies([{id: 1, title: 'initialMovieData'}], {
        type: ACTIONS.EDIT_MOVIE,
        payload: {id: 1, title: 'editedMovieData'}
      })
    ).toEqual([{id: 1, title: 'editedMovieData'}])
  })

  it('should handle ADD_MOVIE', () => {
    expect(
      movies(['movieData'], {
        type: ACTIONS.ADD_MOVIE,
        payload: 'otherMovieData'
      })
    ).toEqual(['movieData', 'otherMovieData'])
  })

  it('should handle DELETE_MOVIE', () => {
    expect(
      movies([{id: 1, title: 'movieData1'}, {id: 2, title: 'movieData2'}], {
        type: ACTIONS.DELETE_MOVIE,
        payload: 2
      })
    ).toEqual([{id: 1, title: 'movieData1'}])
  })

  it('should handle SORT_MOVIES', () => {
    expect(
      movies([{id: 1, vote_average: 5}, {id: 2, vote_average: 7}], {
        type: ACTIONS.SORT_MOVIES,
        payload: {
          sortBy: 'vote_average',
          sortOrder: 'asc'
        }
      })
    ).toEqual([{id: 2, vote_average: 7}, {id: 1, vote_average: 5}])
  })

  it('should handle SORT_MOVIES', () => {
    expect(
      movies([{id: 1, genres: ['Comedy']}, {id: 2, genres: ['Action']}, {id: 3, genres: ['Action']}], {
        type: ACTIONS.FILTER_MOVIES,
        payload: 'Action'
      })
    ).toEqual([{id: 2, genres: ['Action']}, {id: 3, genres: ['Action']}])
  })
})