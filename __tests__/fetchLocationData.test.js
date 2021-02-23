const { fetchLocationData } = require("../src/server/apiDataFetchers");

describe("fetch location data", () => {
  test("fetch with valid input", async () => {
    const { ok, data } = await fetchLocationData("bangalore");
    expect(ok).toBe(true);
    expect(data).toBeDefined();

    const { locationName, countryName, coordinates } = data;
    const { latitude, longitude } = coordinates;

    expect(typeof locationName).toBe("string");
    expect(typeof countryName).toBe("string");
    expect(typeof latitude).toBe("string");
    expect(typeof longitude).toBe("string");
  });

  test("fetch with invalid input", async () => {
    const { ok, data } = await fetchLocationData("343hjk");
    expect(ok).toBe(false);
    expect(data).toBeNull();
  });
});
