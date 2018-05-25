import Repo from './repo';
import appearanceType from '../../domain/appearance/appearance-type';

const entities = {
  movies: {
    foo: {
      id: 'foo',
      title: 'The Foo',
    },
  },
  characters: {
    bar: {
      id: 'bar',
      name: 'The Bar',
    },
  },
  stones: {
    baz: {
      id: 'baz',
      name: 'The Baz',
    },
  },
  characterAppearances: {
    barInFoo: {
      id: 'barInFoo',
      movie: 'foo',
      character: 'bar',
      type: appearanceType.FIRST_APPEARED,
    },
  },
  stoneAppearances: {
    bazInFoo: {
      id: 'bazInFoo',
      movie: 'foo',
      stone: 'baz',
      type: appearanceType.LAST_APPEARED,
    },
  },
};

describe('repo', () => {
  describe('getAllMovies', () => {
    test('get a single movie with stone and character', () => {
      const repo = new Repo(entities);

      const movies = repo.getAllMovies();

      expect(movies).toEqual([
        {
          id: 'foo',
          title: 'The Foo',
          characters: [
            {
              id: 'barInFoo',
              type: appearanceType.FIRST_APPEARED,
              movie: 'foo',
              character: {
                id: 'bar',
                name: 'The Bar',
              },
            },
          ],
          stones: [
            {
              id: 'bazInFoo',
              type: appearanceType.LAST_APPEARED,
              movie: 'foo',
              stone: {
                id: 'baz',
                name: 'The Baz',
              },
            },
          ],
        },
      ]);
    });
  });

  describe('getMovieByID', () => {
    test('get a single movie populated', () => {
      const repo = new Repo(entities);

      const movie = repo.getMovieByID('foo');

      expect(movie).toEqual({
        id: 'foo',
        title: 'The Foo',
        characters: [
          {
            id: 'barInFoo',
            type: appearanceType.FIRST_APPEARED,
            movie: 'foo',
            character: {
              id: 'bar',
              name: 'The Bar',
            },
          },
        ],
        stones: [
          {
            id: 'bazInFoo',
            type: appearanceType.LAST_APPEARED,
            movie: 'foo',
            stone: {
              id: 'baz',
              name: 'The Baz',
            },
          },
        ],
      });
    });
  });

  describe('getCharacterByID', () => {
    const repo = new Repo(entities);

    const character = repo.getCharacterByID('bar');

    expect(character).toEqual({
      id: 'bar',
      name: 'The Bar',
      movies: [
        {
          id: 'barInFoo',
          type: appearanceType.FIRST_APPEARED,
          character: 'bar',
          movie: {
            id: 'foo',
            title: 'The Foo',
          },
        },
      ],
    });
  });
});
