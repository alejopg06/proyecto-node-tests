const request = require("supertest");
const app = require("../src/app");

describe("User API", () => {
  test("POST /api/users debe crear usuario", async () => {
    const res = await request(app)
      .post("/api/users")
      .send({ name: "Ana", age: 30 });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("Ana");
  });

  test("GET /api/users debe retornar usuarios", async () => {
    const res = await request(app).get("/api/users");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
