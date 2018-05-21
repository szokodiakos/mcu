import * as R from 'ramda';

class CharacterRepo {
  getByID(characterID, entities) {
    return R.pipe(
      R.values,
      R.find(R.propEq('id', characterID)),
      R.ifElse(
        R.isNil,
        R.identity,
        populateCharacter(entities),
      ),
    )(entities.characters);
  }
}

const populateCharacter = entities => character => ({
  ...character,
  movies: populateMovies(character.id, entities),
});

const populateMovies = (characterID, entities) => R.pipe(
  R.values,
  R.filter(R.propEq('character', characterID)),
  R.map(appearance => ({
    type: appearance.type,
    movie: populateMovie(appearance.movie, entities),
  })),
)(entities.characterAppearances);

const populateMovie = (movieID, entities) => R.pipe(
  R.values,
  R.find(R.propEq('id', movieID)),
)(entities.movies);

export default CharacterRepo;
