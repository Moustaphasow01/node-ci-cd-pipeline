const request = require("supertest");
const app = require("./../server.js");

describe("GET /", () => {
  it("should return a message", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Hello, world!");
  });
});
