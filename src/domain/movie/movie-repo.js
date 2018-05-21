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

const populateMovies = entities => R.pipe(
  R.values,
  R.map(populateMovie(entities)),
)(entities.movies);

const populateMovie = entities => movie => ({
  ...movie,
  characters: populateCharacters(movie.id, entities),
  stones: populateStones(movie.id, entities),
});

const populateAppearances = (entityKey, appearanceKey, appearanceEntityKey) => (movieID, entities) => R.pipe(
  R.values,
  R.filter(R.propEq('movie', movieID)),
  R.map(appearance => ({
    type: appearance.type,
    [appearanceKey]: populateAppearance(appearanceEntityKey)(appearance[appearanceKey], entities),
  })),
)(entities[entityKey]);

const populateCharacters = populateAppearances(
  'characterAppearances',
  'character',
  'characters',
);

const populateStones = populateAppearances(
  'stoneAppearances',
  'stone',
  'stones',
);

const populateAppearance = appearanceEntityKey => (id, entities) => R.pipe(
  R.values,
  R.find(R.propEq('id', id)),
)(entities[appearanceEntityKey]);

export default MovieRepo;
