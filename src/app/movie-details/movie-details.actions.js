export const movieDetailsActionType = {
  FETCH_MOVIE_DETAILS: 'FETCH_MOVIE_DETAILS',
  FETCH_MOVIE_DETAILS_SUCCESS: 'FETCH_MOVIE_DETAILS_SUCCESS',
  FETCH_MOVIE_DETAILS_NOT_FOUND: 'FETCH_MOVIE_DETAILS_NOT_FOUND',
  NAVIGATE_TO_CHARACTER_DETAILS: 'NAVIGATE_TO_CHARACTER_DETAILS',
};

export const fetchMovieDetails = url => ({
  type: movieDetailsActionType.FETCH_MOVIE_DETAILS,
  payload: url,
});

export const fetchMovieDetailsSuccess = movie => ({
  type: movieDetailsActionType.FETCH_MOVIE_DETAILS_SUCCESS,
  payload: movie,
});

export const fetchMovieDetailsNotFound = () => ({
  type: movieDetailsActionType.FETCH_MOVIE_DETAILS_NOT_FOUND,
});

export const navigateToCharacterDetails = characterID => ({
  type: movieDetailsActionType.NAVIGATE_TO_CHARACTER_DETAILS,
  payload: characterID,
});
