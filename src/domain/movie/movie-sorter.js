import * as R from 'ramda';

export const sortMovies = movies =>
  R.pipe(
    R.ifElse(
      R.isEmpty,
      R.always([]),
      R.reduce(
        (acc, movie) => {
          const previousMovies = R.last(acc);
          if (movieDependsOnPreviousMovies(movie, previousMovies)) {
            return R.append([movie], acc);
          }

          const previousMoviesIndex = R.length(acc) - 1;
          return R.adjust(R.append(movie), previousMoviesIndex, acc);
        },
        [[]],
      ),
    ),
  )(movies);

const movieDependsOnPreviousMovies = (movie, previousMovies) =>
  R.anyPass([characterAppearsInPreviousMovies, stoneAppearsInPreviousMovies, phaseIsGreaterThanPreviousMovies])(
    movie,
    previousMovies,
  );

const phaseIsGreaterThanPreviousMovies = (movie, previousMovies) =>
  R.pipe(R.ifElse(R.isEmpty, R.always(false), R.pipe(R.head, R.prop('phase'), R.gt(movie.phase))))(previousMovies);

const entityAppearsInPreviousMovies = mapToEntityID => (movie, previousMovies) => {
  const movieEntities = mapToEntityID(movie);
  const previousMovieEntities = R.pipe(R.map(mapToEntityID), R.flatten)(previousMovies);

  return R.pipe(R.intersection, R.isEmpty, R.not)(movieEntities, previousMovieEntities);
};

const mapToCharacterIDs = movie => R.pipe(R.propOr([], 'characters'), R.map(R.path(['character', 'id'])))(movie);
const mapToStoneIDs = movie => R.pipe(R.propOr([], 'stones'), R.map(R.path(['stone', 'id'])))(movie);

const characterAppearsInPreviousMovies = entityAppearsInPreviousMovies(mapToCharacterIDs);
const stoneAppearsInPreviousMovies = entityAppearsInPreviousMovies(mapToStoneIDs);
