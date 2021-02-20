import { fetchForecastFromServer } from "../src/client/js/serverDataFetchers";

describe("fetch forecast from server", () => {
  test("fetch with valid inputs", async () => {
    const coordinates = {
      latitude: "12.97194",
      longitude: "77.59369",
    };
    const forecast = await fetchForecastFromServer(8, coordinates);
    const { temperature, precipitation, description } = forecast;
    expect(typeof temperature).toBe("number");
    expect(typeof precipitation).toBe("number");
    expect(typeof description).toBe("string");
  });

  test("fetch with invalid input", () => {
    const coordinates = {
      latitude: "12.97194",
      longitude: "77.59369",
    };

    expect(fetchForecastFromServer(18, coordinates)).rejects.toEqual(
      new Error("Couldn't fetch forecast with the given trip date")
    );
  });
});
