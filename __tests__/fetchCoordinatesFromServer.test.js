import { fetchCoordinatesFromServer } from "../src/client/js/serverDataFetchers";

describe("fetch coordinates from server", () => {
  test("fetch with valid input", async () => {
    const coordinates = await fetchCoordinatesFromServer("bangalore");
    const { latitude, longitude } = coordinates;
    expect(typeof latitude).toBe("string");
    expect(typeof longitude).toBe("string");
  });

  test("fetch with invalid input", () => {
    const coordinatesFetchError = new Error(
      "Could not fetch coordinates with given destination name!"
    );

    expect(fetchCoordinatesFromServer("")).rejects.toEqual(
      coordinatesFetchError
    );
    expect(fetchCoordinatesFromServer("Baggalore")).rejects.toEqual(
      coordinatesFetchError
    );
  });
});
