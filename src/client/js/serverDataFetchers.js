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

const fetchLocationPictureURLFromServer = async (locationName, countryName) => {
  const locationPictureURLFetchError = new Error(
    "Could not fetch picture with given location name"
  );

  try {
    let locationPictureOk = false;
    let countryPictureOk = false;
    let data = {};

    // try to fetch picture with location name
    ({
      data: { ok: locationPictureOk, data },
    } = await axios.get(`http://localhost:3000/picture/${locationName}`));

    // if can't fetch picture with location name, try fetching with country name
    if (!locationPictureOk) {
      ({
        data: { ok: countryPictureOk, data },
      } = await axios.get(`http://localhost:3000/picture/${countryName}`));
    }

    // check if picture was fetched with either location name or country name
    const ok = locationPictureOk || countryPictureOk;
    if (!ok) {
      throw locationPictureURLFetchError;
    }
    return data;
  } catch {
    throw locationPictureURLFetchError;
  }
};

export {
  fetchLocationDataFromServer,
  fetchForecastFromServer,
  fetchLocationPictureURLFromServer,
};
