import { getTypes } from '../solutions/9-chain-of-promises.js';

test('getTypes 1', () => {
  const actual = getTypes(['undefined']);
  return expect(actual).resolves.toEqual([null]);
});

test('getTypes 2', () => {
  const actual = getTypes(['__fixtures__']);
  return expect(actual).resolves.toEqual(['directory']);
});

test('getTypes 3', () => {
  const actual = getTypes(['__fixtures__/example']);
  return expect(actual).resolves.toEqual(['file']);
});

test('getTypes 4', () => {
  const actual = getTypes(['__fixtures__/example', 'undefined', '__fixtures__/example2', '__fixtures__']);
  return expect(actual).resolves.toEqual(['file', null, null, 'directory']);
});

test('getTypes 5', () => {
  const actual = getTypes(['undefined', '__fixtures__/example', '__fixtures__/et', '__fixtures__/example2']);
  return expect(actual).resolves.toEqual([null, 'file', null, null]);
});
