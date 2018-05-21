export const characterDetailsActionType = {
  FETCH_CHARACTER_DETAILS: 'FETCH_CHARACTER_DETAILS',
  FETCH_CHARACTER_DETAILS_SUCCESS: 'FETCH_CHARACTER_DETAILS_SUCCESS',
  FETCH_CHARACTER_DETAILS_NOT_FOUND: 'FETCH_CHARACTER_DETAILS_NOT_FOUND',
};

export const fetchCharacterDetails = (url) => ({ type: characterDetailsActionType.FETCH_CHARACTER_DETAILS, payload: url });

export const fetchCharacterDetailsSuccess = (character) => ({ type: characterDetailsActionType.FETCH_CHARACTER_DETAILS_SUCCESS, payload: character });

export const fetchCharacterDetailsNotFound = () => ({ type: characterDetailsActionType.FETCH_CHARACTER_DETAILS_NOT_FOUND });
