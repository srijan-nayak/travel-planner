import fetchTripData from "../src/client/js/fetchTripData";

test("expect trip data to be defined", () => {
  expect(fetchTripData).toBeDefined();
});
