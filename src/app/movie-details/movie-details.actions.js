export const movieDetailsActionType = {
  FETCH_MOVIE_DETAILS: 'FETCH_MOVIE_DETAILS',
  FETCH_MOVIE_DETAILS_SUCCESS: 'FETCH_MOVIE_DETAILS_SUCCESS',
  FETCH_MOVIE_DETAILS_FAILED: 'FETCH_MOVIE_DETAILS_FAILED',
};

export const fetchMovieDetails = (movieName) => ({ type: movieDetailsActionType.FETCH_MOVIE_DETAILS, payload: movieName });

export const fetchMovieDetailsSuccess = (movie) => ({ type: movieDetailsActionType.FETCH_MOVIE_DETAILS_SUCCESS, payload: movie });

export const fetchMovieDetailsFailed = () => ({ type: movieDetailsActionType.FETCH_MOVIE_DETAILS_FAILED });
