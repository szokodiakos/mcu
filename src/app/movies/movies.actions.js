export const moviesActionType = {
  FETCH_MOVIES: 'FETCH_MOVIES',
  FETCH_MOVIES_SUCCESS: 'FETCH_MOVIES_SUCCESS',
}

export const fetchMovies = () => ({ type: moviesActionType.FETCH_MOVIES });

export const fetchMoviesSuccess = (movies) => ({ type: moviesActionType.FETCH_MOVIES_SUCCESS, payload: movies });
