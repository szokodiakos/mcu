export const movieDetailsActionType = {
  FETCH_MOVIE_DETAILS: 'FETCH_MOVIE_DETAILS',
  FETCH_MOVIE_DETAILS_SUCCESS: 'FETCH_MOVIE_DETAILS_SUCCESS',
  FETCH_MOVIE_DETAILS_NOT_FOUND: 'FETCH_MOVIE_DETAILS_NOT_FOUND',
};

export const fetchMovieDetails = (movieTitle) => ({ type: movieDetailsActionType.FETCH_MOVIE_DETAILS, payload: movieTitle });

export const fetchMovieDetailsSuccess = (movie) => ({ type: movieDetailsActionType.FETCH_MOVIE_DETAILS_SUCCESS, payload: movie });

export const fetchMovieDetailsNotFound = () => ({ type: movieDetailsActionType.FETCH_MOVIE_DETAILS_NOT_FOUND });
