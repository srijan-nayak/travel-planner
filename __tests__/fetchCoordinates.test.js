const { fetchCoordinates } = require("../src/server/apiDataFetchers");

test("Fetch coordinates for Bangalore in India", async () => {
  const { ok, data } = await fetchCoordinates("bangalore");
  if (ok) {
    const { longitude, latitude } = data;
    expect(latitude).toBe("12.97194");
    expect(longitude).toBe("77.59369");
  } else {
    expect(data).toBeNull();
  }
});
