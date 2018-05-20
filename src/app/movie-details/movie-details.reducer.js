import { movieDetailsActionType } from './movie-details.actions';

const initialState = {
  movie: {},
};

const movieDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case movieDetailsActionType.FETCH_MOVIE_DETAILS_SUCCESS:
      return { movie: action.payload };
    case movieDetailsActionType.FETCH_MOVIE_DETAILS_NOT_FOUND:
      return { movie: null };
    default:
      return state;
  }
};

export default movieDetailsReducer;
