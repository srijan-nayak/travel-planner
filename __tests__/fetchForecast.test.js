const { fetchWeatherForecast } = require("../src/server/apiDataFetchers");

describe("fetch forecast", () => {
  test("fetch with valid inputs", async () => {
    const { ok, data } = await fetchWeatherForecast(7, {
      latitude: "12.97194",
      longitude: "77.59369",
    });
    expect(ok).toBe(true);
    expect(data).toBeDefined();

    const { temperature, precipitation, description } = data;
    expect(typeof temperature).toBe("number");
    expect(typeof precipitation).toBe("number");
    expect(typeof description).toBe("string");
  });

  test("fetch with invalid inputs", async () => {
    const { ok, data } = await fetchWeatherForecast(-1, {
      latitude: "1x2.97gr194",
      longitude: "77.s59369",
    });
    expect(ok).toBe(false);
    expect(data).toBeNull();
  });
});
