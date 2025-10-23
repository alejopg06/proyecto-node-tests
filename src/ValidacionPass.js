// passwordValidator.js

/**
 * Valida que una contraseña cumpla con:
 * - Al menos 8 caracteres
 * - Una mayúscula
 * - Una minúscula
 * - Un número
 * - Un carácter especial
 */
function validatePassword(password) {
  if (typeof password !== "string") {
    throw new Error("La contraseña debe ser una cadena de texto");
  }

  const minLength = 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (
    password.length < minLength ||
    !hasUppercase ||
    !hasLowercase ||
    !hasNumber ||
    !hasSpecial
  ) {
    return false;
  }

  return true;
}

module.exports = validatePassword;
