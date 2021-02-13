const { fetchWeatherForecast } = require("../src/server/apiDataFetchers");

test("fetch weather forecast", async () => {
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
