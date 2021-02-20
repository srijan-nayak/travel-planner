import axios from "axios";

const fetchCoordinatesFromServer = async (locationName) => {
  const coordinatesFetchError = new Error(
    "Could not fetch coordinates with given destination name!"
  );

  try {
    const {
      data: { ok, data },
    } = await axios.get(`http://localhost:3000/coordinates/${locationName}`);
    if (!ok) {
      throw coordinatesFetchError;
    }
    return data;
  } catch {
    throw coordinatesFetchError;
  }
};

export { fetchCoordinatesFromServer };
