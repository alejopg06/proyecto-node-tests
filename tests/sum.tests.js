// tests/sum.test.js
const { sum } = require('../src/sum');

describe('sum function', () => {
  test('suma números positivos', () => {
    expect(sum(2, 3)).toBe(5);
  });

  test('suma con cero', () => {
    expect(sum(0, 4)).toBe(4);
  });

  test('suma números negativos', () => {
    expect(sum(-2, -3)).toBe(-5);
  });
});
