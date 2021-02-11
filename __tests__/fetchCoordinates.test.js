const { fetchCoordinates } = require("../src/server/apiDataFetchers");

test("fetch coordinates", async () => {
  const { ok, data } = await fetchCoordinates("bangalore");
  expect(ok).toBe(true);
  expect(data).toBeDefined();

  const { latitude, longitude } = data;
  expect(typeof latitude).toBe("string");
  expect(typeof longitude).toBe("string");
});
