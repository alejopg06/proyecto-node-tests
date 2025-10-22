const { suma } = require('./src/suma');

test('suma dos números correctamente', () => {
  expect(suma(2, 3)).toBe(5);
});

