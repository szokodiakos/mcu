import characters from '../../domain/character/characters';
import movies from '../../domain/movie/movies';
import characterAppearances from '../../domain/character/character-appearances';
import stones from '../../domain/stone/stones';
import stoneAppearances from '../../domain/stone/stone-appearances';

const initialState = {
  movies,
  characters,
  stones,
  characterAppearances,
  stoneAppearances,
}

const entitiesReducer = (state = initialState, action) => state;

export default entitiesReducer;
