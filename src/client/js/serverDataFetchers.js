import axios from "axios";

const fetchLocationDataFromServer = async (query) => {
  const locationDataFetchError = new Error(
    "Could not fetch coordinates with given destination name!"
  );

  try {
    const {
      data: { ok, data },
    } = await axios.get(`http://localhost:3000/location/${query}`);
    if (!ok) {
      throw locationDataFetchError;
    }
    return data;
  } catch {
    throw locationDataFetchError;
  }
};

const fetchForecastFromServer = async (days, coordinates) => {
  const forecastFetchError = new Error(
    "Couldn't fetch forecast with the given trip date"
  );

  const { latitude, longitude } = coordinates;

  try {
    const {
      data: { ok, data },
    } = await axios.get(
      `http://localhost:3000/forecast/${days}/${latitude}/${longitude}`
    );
    if (!ok) {
      throw forecastFetchError;
    }
    return data;
  } catch {
    throw forecastFetchError;
  }
};

const fetchLocationPictureURLFromServer = async (locationName) => {
  const locationPictureURLFetchError = new Error(
    "Could not fetch picture with given location name"
  );

  try {
    const {
      data: { ok, data },
    } = await axios.get(`http://localhost:3000/picture/${locationName}`);
    if (!ok) {
      throw locationPictureURLFetchError;
    }
    return data;
  } catch {
    locationPictureURLFetchError;
  }
};

export {
  fetchLocationDataFromServer,
  fetchForecastFromServer,
  fetchLocationPictureURLFromServer,
};
