import { fetchLocationPictureURLFromServer } from "../src/client/js/serverDataFetchers";

describe("fetch location picture URL from server", () => {
  test("fetch with valid input", async () => {
    const { locationPictureURL } = await fetchLocationPictureURLFromServer(
      "Bengaluru",
      "India"
    );
    expect(locationPictureURL).toMatch(/https:\/\/pixabay\.com\/get\/.*\.jpg$/);
  });

  test("fetch with invalid input", () => {
    expect(fetchLocationPictureURLFromServer("'")).rejects.toEqual(
      new Error("Could not fetch picture with given location name")
    );
  });
});
