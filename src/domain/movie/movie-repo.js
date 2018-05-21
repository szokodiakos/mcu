import * as R from 'ramda';

class MovieRepo {
  getAll(entities) {
    return populateMovies(entities);
  }

  getByID(movieID, entities) {
    return R.pipe(
      R.values,
      R.find(R.propEq('id', movieID)),
      R.ifElse(
        R.isNil,
        R.identity,
        populateMovie(entities),
      ),
    )(entities.movies);
  }
}

const populateMovies = (entities) => R.pipe(
  R.values,
  R.map(populateMovie(entities)),
)(entities.movies);

const populateMovie = entities => movie => ({
  ...movie,
  characters: populateCharacters(movie.id, entities),
});

const populateCharacters = (movieID, entities) => R.pipe(
  R.values,
  R.filter(R.propEq('movie', movieID)),
  R.map(appearance => ({
    type: appearance.type,
    character: populateCharacter(appearance.character, entities),
  })),
)(entities.characterAppearances);

const populateCharacter = (characterID, entities) => R.pipe(
  R.values,
  R.find(R.propEq('id', characterID)),
)(entities.characters);

export default MovieRepo;
