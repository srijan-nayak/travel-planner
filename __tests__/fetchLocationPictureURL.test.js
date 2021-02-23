/**
 * @jest-environment node
 */

const { fetchLocationPictureURL } = require("../src/server/apiDataFetchers");

describe("fetch location picture", () => {
  test("fetch with valid input", async () => {
    const { ok, data } = await fetchLocationPictureURL("bangalore");
    expect(ok).toBe(true);
    expect(data).toBeDefined();

    const { locationPictureURL } = data;
    expect(locationPictureURL).toMatch(/https:\/\/pixabay\.com\/get\/.*\.jpg$/);
  });

  test("fetch with invalid input", async () => {
    const { ok, data } = await fetchLocationPictureURL("'");
    expect(ok).toBe(false);
    expect(data).toBeNull();
  });
});
