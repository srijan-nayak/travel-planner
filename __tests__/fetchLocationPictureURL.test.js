const { fetchLocationPictureURL } = require("../src/server/apiDataFetchers");

test("fetch location picture url", async () => {
  const { ok, data } = await fetchLocationPictureURL("bangalore");
  expect(ok).toBe(true);
  expect(data).toBeDefined();

  const { imageURL } = data;
  expect(imageURL).toMatch(/https:\/\/pixabay\.com\/get\/.*\.jpg$/);
});
