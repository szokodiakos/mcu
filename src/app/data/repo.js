import * as R from 'ramda';

const getAll = entities => R.values(entities);

const getByID = (entities, id) => R.find(R.propEq('id', id), entities);

const populate = filterFn => (propertyToPopulateTo, entitiesToPopulateFrom, compareFn) => entity => R.pipe(
  R.set(
    R.lensProp(propertyToPopulateTo),
    filterFn(entityToBePopulated => compareFn(entity, entityToBePopulated), entitiesToPopulateFrom),
  ),
)(entity);

const populateOne = populate(R.find);
const populateMany = populate(R.filter);

class Repo {
  constructor(entities) {
    this._entities = entities;
  }

  getAllMovies() {
    return R.pipe(
      R.map(movie => this._populateMovie(movie)),
    )(getAll(this._entities.movies));
  }

  getMovieByID(movieID) {
    return R.ifElse(
      R.isNil,
      R.identity,
      movie => this._populateMovie(movie),
    )(getByID(this._movies, movieID));
  }

  _populateMovie(movie) {
    return R.pipe(
      this._populateCharacterAppearancesToMovie,
      this._populateStoneAppearancesToMovie,
      R.evolve({
        characters: R.map(this._populateCharacterToCharacterAppearance),
        stones: R.map(this._populateStoneToStoneAppearance),
      }),
    )(movie);
  }

  get _populateCharacterAppearancesToMovie() {
    return populateMany('characters', this._characterAppearances, (m, ca) => m.id === ca.movie);
  }

  get _populateStoneAppearancesToMovie() {
    return populateMany('stones', this._stoneAppearances, (m, ca) => m.id === ca.movie);
  }

  get _populateCharacterToCharacterAppearance() {
    return populateOne('character', this._characters, (ca, c) => ca.character === c.id);
  }

  get _populateStoneToStoneAppearance() {
    return populateOne('stone', this._stones, (sa, s) => sa.stone === s.id);
  }

  getCharacterByID(characterID) {
    return R.ifElse(
      R.isNil,
      R.identity,
      character => this._populateCharacter(character),
    )(getByID(this._characters, characterID));
  }

  _populateCharacter(character) {
    return R.pipe(
      this._populateCharacterAppearancesToCharacter,
      R.evolve({
        movies: R.map(this._populateMovieToCharacterAppearance),
      })
    )(character);
  }

  get _populateCharacterAppearancesToCharacter() {
    return populateMany('movies', this._characterAppearances, (c, ca) => c.id === ca.character);
  }

  get _populateMovieToCharacterAppearance() {
    return populateOne('movie', this._movies, (ca, m) => ca.movie === m.id);
  }

  get _movies() {
    return getAll(this._entities.movies);
  }

  get _characters() {
    return getAll(this._entities.characters);
  }

  get _characterAppearances() {
    return getAll(this._entities.characterAppearances);
  }

  get _stones() {
    return getAll(this._entities.stones);
  }

  get _stoneAppearances() {
    return getAll(this._entities.stoneAppearances);
  }
}

export default Repo;
