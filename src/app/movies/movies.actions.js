export const moviesActionType = {
  FETCH_MOVIES: 'FETCH_MOVIES',  
  FETCH_MOVIES_SUCCESS: 'FETCH_MOVIES_SUCCESS',
  NAVIGATE_TO_MOVIE_DETAILS: 'NAVIGATE_TO_MOVIE_DETAILS',
}

export const fetchMovies = () => ({ type: moviesActionType.FETCH_MOVIES });

export const fetchMoviesSuccess = (movies) => ({ type: moviesActionType.FETCH_MOVIES_SUCCESS, payload: movies });

export const navigateToMovieDetails = (movieName) => ({ type: moviesActionType.NAVIGATE_TO_MOVIE_DETAILS, payload: movieName });
