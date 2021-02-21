import { fetchLocationPictureURLFromServer } from "../src/client/js/serverDataFetchers";

describe("fetch location picture URL from server", () => {
  test("fetch with valid input", async () => {
    const { imageURL } = await fetchLocationPictureURLFromServer("bangalore");
    expect(imageURL).toMatch(/https:\/\/pixabay\.com\/get\/.*\.jpg$/);
  });

  test("fetch with invalid input", () => {
    expect(fetchLocationPictureURLFromServer("'")).rejects.toEqual(
      new Error("Could not fetch picture with given location name")
    );
  });
});
