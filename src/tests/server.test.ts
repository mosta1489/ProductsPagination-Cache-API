import supertest from "supertest";
import app from "../server";

describe("Integration test", () => {
  const client = supertest(app);

  it("Server is running", async () => {
    client.get("/test").expect(200);
  });

  // test get products endpoint and pass query params page, limit
  it("Get page of products", async () => {
    const response = await client.get("/products?page=1&limit=10");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("data");
    expect(response.body).toHaveProperty("totalPages");
    expect(response.body).toHaveProperty("currentPage");
  });

  // test get products endpoint and pass query params page, limit, category
  it("Get page of products using anouter limit", async () => {
    const response = await client.get(
      "/products?page=2&limit=5&category=electronics"
    );
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("data");
    expect(response.body).toHaveProperty("totalPages");
    expect(response.body).toHaveProperty("currentPage");
  });
});
