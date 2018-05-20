export const moviesActionType = {
  FETCH_MOVIES: 'FETCH_MOVIES',
  FETCH_MOVIES_SUCCESS: 'FETCH_MOVIES_SUCCESS',
  SHOW_MOVIE_DETAILS: 'SHOW_MOVIE_DETAILS',
}

export const fetchMovies = () => ({ type: moviesActionType.FETCH_MOVIES });

export const fetchMoviesSuccess = (movies) => ({ type: moviesActionType.FETCH_MOVIES_SUCCESS, payload: movies });

export const showMovieDetails = (movieName) => ({ type: moviesActionType.SHOW_MOVIE_DETAILS, payload: movieName });
