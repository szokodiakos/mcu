import { combineEpics } from 'redux-observable';
import { map } from 'rxjs/operators';
import _camelCase from 'lodash.camelcase';

import {
  characterDetailsActionType,
  fetchCharacterDetailsSuccess,
  fetchCharacterDetailsNotFound,
} from './character-details.actions';

const fetchCharacterDetailsEpic = (action$, store, { repo }) =>
  action$
    .ofType(characterDetailsActionType.FETCH_CHARACTER_DETAILS)
    .pipe(
      map(action => action.payload),
      map(_camelCase),
      map(characterID => repo.getCharacterByID(characterID)),
      map(character => (character ? fetchCharacterDetailsSuccess(character) : fetchCharacterDetailsNotFound())),
    );

export default combineEpics(fetchCharacterDetailsEpic);
