const { fetchCoordinates } = require("../src/server/apiDataFetchers");

describe("fetch coordinates", () => {
  test("fetch with valid input", async () => {
    const { ok, data } = await fetchCoordinates("bangalore");
    expect(ok).toBe(true);
    expect(data).toBeDefined();

    const { latitude, longitude } = data;
    expect(typeof latitude).toBe("string");
    expect(typeof longitude).toBe("string");
  });

  test("fetch with invalid input", async () => {
    const { ok, data } = await fetchCoordinates("343hjk");
    expect(ok).toBe(false);
    expect(data).toBeNull();
  });
});
