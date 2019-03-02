import { arrayToDict, matchDictKeysByArray } from '.';

test('arrayToDict function should transfer array to a corresponding dictionary object', () => {
  const TEST_CASE1 = {
    arr: [
      { verb: 'eat', noun: 'apple' },
      { verb: 'walk', noun: 'dog' },
      { verb: 'wash', noun: 'hair' }
    ],
    key1: 'verb',
    key2: 'noun'
  };
  expect(arrayToDict(TEST_CASE1.arr, TEST_CASE1.key1, TEST_CASE1.key2)).toEqual(
    {
      eat: 'apple',
      walk: 'dog',
      wash: 'hair'
    }
  );
});

test('matchDictKeysByArray function should return an array of matched Keys ', () => {
  expect(
    matchDictKeysByArray(['apple', 'dog', 'hair'], {
      eat: 'apple',
      walk: 'dog',
      wash: 'hair'
    })
  ).toEqual(['eat', 'walk', 'wash']);
});
