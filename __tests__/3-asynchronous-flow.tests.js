import { compareFileSizes } from "../solutions/3-asynchronous-flow.js";

test("compareFileSizes 1", () => {
  const filepath = "__tests__/3-asynchronous-flow.tests.js";
  return new Promise((resolve) => {
    compareFileSizes(filepath, filepath, (_error1, result) => {
      expect(result).toBe(0);
      resolve(0);
    });
  });
});

test("compareFileSizes 2", () => {
  const filepath1 = "__tests__/3-asynchronous-flow.tests.js";
  const filepath2 = "Makefile";
  return new Promise((resolve) => {
    compareFileSizes(filepath1, filepath2, (_error1, result) => {
      expect(result).toBe(1);
      resolve();
    });
  });
});

test("compareFileSizes 3", () => {
  const filepath1 = "Makefile";
  const filepath2 = "__tests__/3-asynchronous-flow.tests.js";
  return new Promise((resolve) => {
    compareFileSizes(filepath1, filepath2, (_error1, result) => {
      expect(result).toBe(-1);
      resolve();
    });
  });
});
