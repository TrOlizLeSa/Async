import fs from 'fs';
import { jest } from '@jest/globals';
import print from '../solutions/1-asynchronous-code.js';

test('readFile', () => {
  const results = [];
  const { log } = console;
  console.log = jest.fn((...args) => {
    results.push(...args);
    log(...args);
  });
  print('__tests__/1-asynchronous-code.tests.js');

  return new Promise((done) => {
    setTimeout(() => {
      const expected = [fs.readFileSync('__tests__/1-asynchronous-code.tests.js', 'utf-8')];
      expect(results).toEqual(expected);
      done();
    }, 1000);
  });
});