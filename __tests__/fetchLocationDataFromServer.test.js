import { fetchLocationDataFromServer } from "../src/client/js/serverDataFetchers";

describe("fetch coordinates from server", () => {
  test("fetch with valid input", async () => {
    const {
      locationName,
      countryName,
      coordinates,
    } = await fetchLocationDataFromServer("bangalore");
    const { latitude, longitude } = coordinates;

    expect(typeof locationName).toBe("string");
    expect(typeof countryName).toBe("string");
    expect(typeof latitude).toBe("string");
    expect(typeof longitude).toBe("string");
  });

  test("fetch with invalid input", () => {
    const locationDataFetchError = new Error(
      "Could not fetch coordinates with given destination name!"
    );

    expect(fetchLocationDataFromServer("")).rejects.toEqual(
      locationDataFetchError
    );
    expect(fetchLocationDataFromServer("Baggalore")).rejects.toEqual(
      locationDataFetchError
    );
  });
});
