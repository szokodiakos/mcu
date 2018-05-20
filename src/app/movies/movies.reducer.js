import { moviesActionType } from "./movies.actions";

const initialState = [];

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case moviesActionType.FETCH_MOVIES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default moviesReducer;
