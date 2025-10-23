const validatePassword = require('./passwordValidator');

test('acepta una contraseña válida', () => {
  expect(validatePassword('ClaveSegura1!')).toBe(true);
});

test('rechaza una contraseña demasiado corta', () => {
  expect(validatePassword('Ab1!')).toBe(false);
});

test('rechaza una contraseña sin mayúsculas', () => {
  expect(validatePassword('contraseña1!')).toBe(false);
});

test('rechaza una contraseña sin números', () => {
  expect(validatePassword('Contraseña!')).toBe(false);
});

test('lanza error si no es una cadena', () => {
  expect(() => validatePassword(123456)).toThrow('La contraseña debe ser una cadena de texto');
});
