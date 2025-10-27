const { addUser, getUsers } = require("../src/services/userService");

describe("User Service", () => {
  test("Agrega un usuario correctamente", () => {
    const user = addUser("Juan", 25);
    expect(user).toHaveProperty("id");
    expect(user.name).toBe("Juan");
  });

  test("No debe agregar usuario inválido", () => {
    expect(addUser("", -10)).toBeNull();
  });
});
