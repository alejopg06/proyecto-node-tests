// import { suma } from '../src/suma';
const { suma } = require('../src/suma');

test('suma dos números correctamente', () => {
  expect(suma(23, 14)).toBe(32);
});

