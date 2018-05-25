import { sortMovies } from './movie-sorter';

describe('movie-sorter', () => {
  describe('sortMovies', () => {
    test('return empty list if no movies are provided', () => {
      expect(sortMovies([])).toEqual([]);
    });

    test('make movies siblings if they have no dependencies', () => {
      expect(sortMovies([{ title: 'foo' }, { title: 'bar' }])).toEqual([[{ title: 'foo' }, { title: 'bar' }]]);
    });

    describe('character based sorting', () => {
      test('make a movie the child of another movie if a character appears in both', () => {
        expect(
          sortMovies([
            { title: 'foo', characters: [{ id: 'oneInFoo', character: { id: 'one' } }] },
            { title: 'bar', characters: [{ id: 'oneInBar', character: { id: 'one' } }] },
          ]),
        ).toEqual([
          [{ title: 'foo', characters: [{ id: 'oneInFoo', character: { id: 'one' } }] }],
          [{ title: 'bar', characters: [{ id: 'oneInBar', character: { id: 'one' } }] }],
        ]);
      });

      test('multiple character based testing', () => {
        expect(
          sortMovies([
            { title: 'foo', characters: [{ id: 'oneInFoo', character: { id: 'one' } }] },
            { title: 'bar', characters: [{ id: 'twoInBar', character: { id: 'two' } }] },
            { title: 'baz', characters: [{ id: 'oneInBar', character: { id: 'one' } }] },
            { title: 'qux', characters: [{ id: 'twoInQux', character: { id: 'two' } }] },
            { title: 'quux', characters: [{ id: 'threeInQuux', character: { id: 'three' } }] },
            { title: 'quuz', characters: [{ id: 'threeInQuuz', character: { id: 'three' } }] },
          ]),
        ).toEqual([
          [
            { title: 'foo', characters: [{ id: 'oneInFoo', character: { id: 'one' } }] },
            { title: 'bar', characters: [{ id: 'twoInBar', character: { id: 'two' } }] },
          ],
          [
            { title: 'baz', characters: [{ id: 'oneInBar', character: { id: 'one' } }] },
            { title: 'qux', characters: [{ id: 'twoInQux', character: { id: 'two' } }] },
            { title: 'quux', characters: [{ id: 'threeInQuux', character: { id: 'three' } }] },
          ],
          [{ title: 'quuz', characters: [{ id: 'threeInQuuz', character: { id: 'three' } }] }],
        ]);
      });
    });
    describe('stone based sorting', () => {
      test('make a movie the child of another movie if a stone appears in both', () => {
        expect(
          sortMovies([
            { title: 'foo', stones: [{ id: 'oneInFoo', stone: { id: 'one' } }] },
            { title: 'bar', stones: [{ id: 'oneInBar', stone: { id: 'one' } }] },
          ]),
        ).toEqual([
          [{ title: 'foo', stones: [{ id: 'oneInFoo', stone: { id: 'one' } }] }],
          [{ title: 'bar', stones: [{ id: 'oneInBar', stone: { id: 'one' } }] }],
        ]);
      });
    });

    describe('phase based sorting', () => {
      test('make movies siblings if they have the same phases', () => {
        expect(sortMovies([{ title: 'foo', phase: 1 }, { title: 'bar', phase: 1 }])).toEqual([
          [{ title: 'foo', phase: 1 }, { title: 'bar', phase: 1 }],
        ]);
      });

      test('make a movie the child of another movie if its from a newer phase', () => {
        expect(sortMovies([{ title: 'foo', phase: 1 }, { title: 'bar', phase: 2 }])).toEqual([
          [{ title: 'foo', phase: 1 }],
          [{ title: 'bar', phase: 2 }],
        ]);
      });
    });
  });
});
