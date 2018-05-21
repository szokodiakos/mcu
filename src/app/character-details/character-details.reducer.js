import { characterDetailsActionType } from './character-details.actions';

const initialState = {
  character: {},
};

const characterDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case characterDetailsActionType.FETCH_CHARACTER_DETAILS_SUCCESS:
      return { character: action.payload };
    case characterDetailsActionType.FETCH_CHARACTER_DETAILS_NOT_FOUND:
      return { character: null };
    default:
      return state;
  }
};

export default characterDetailsReducer;
