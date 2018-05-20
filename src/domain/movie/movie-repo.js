import { of } from 'rxjs/observable/of';

import Movie from './movie';
import Character from '../character/character';
import Stone from '../stone/stone';

const ironMan = new Character('Iron Man', 'Tony Stark');
const warMachine = new Character('War Machine', `Jim 'Rhodey' Rhodes`);
const blackWidow = new Character('Black Widow', 'Natasha Romanoff');
const thor = new Character('Thor', 'God of Thunder');
const loki = new Character('Loki', 'God of Mischief');
const hawkeye = new Character('Hawkeye', 'Clint Barton');
const hulk = new Character('Hulk', 'Bruce Banner');
const cap = new Character('Captain America', 'Steve Rogers');
const bucky = new Character('Bucky', 'James Buchanan Barnes');

const spaceStone = new Stone('space');
const mindStone = new Stone('mind');

const movies = [
  new Movie({
    title: 'Captain America: The First Avenger',
    year: 1946,
    characters: {
      firstAppeared: [cap, bucky],
    },
    stones: {
      firstAppeared: [spaceStone],
    },
  }),
  new Movie({
    title: 'The Incredible Hulk',
    year: 2008,
    characters: {
      firstAppeared: [hulk],
    },
  }),
  new Movie({
    title: 'Iron Man',
    year: 2008,
    characters: {
      firstAppeared: [ironMan, warMachine],
    },
    stones: {},
  }),
  new Movie({
    title: 'Iron Man 2',
    year: 2010,
    characters: {
      firstAppeared: [blackWidow],
      appeared: [ironMan, warMachine],
    },
    stones: {},
  }),
  new Movie({
    title: 'Thor',
    year: 2011,
    characters: {
      firstAppeared: [thor, loki, hawkeye],
    },
    stones: {
      appeared: [spaceStone],
    },
  }),
  new Movie({
    title: 'The Avengers',
    year: 2012,
    characters: {
      appeared: [ironMan, cap, thor, hulk, blackWidow, hawkeye, loki],
    },
    stones: {
      firstAppeared: [mindStone],
      appeared: [spaceStone],
    },
  }),
];

class MovieRepo {
  getAll() {
    return of(movies);
  }

  getByURL(url) {
    return of(movies.find(m => m.toURL() === url));
  }
}

export default MovieRepo;
