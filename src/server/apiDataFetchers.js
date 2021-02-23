require("dotenv").config();
const axios = require("axios").default;

const fetchCoordinates = async (locationName) => {
  const apiRoot = "http://api.geonames.org/searchJSON";
  const geonamesUsername = process.env.GEONAMES_USERNAME;
  const queryParams = {
    q: locationName,
    maxRows: 1,
    username: geonamesUsername,
  };

  try {
    const response = await axios.get(apiRoot, { params: queryParams });
    const { lat: latitude, lng: longitude } = response.data.geonames[0];
    const ok = latitude !== undefined && longitude !== undefined;
    const data = ok ? { latitude, longitude } : null;
    return { ok, data };
  } catch {
    return { ok: false, data: null };
  }
};

const fetchWeatherForecast = async (days, coordinates) => {
  const apiRoot = "https://api.weatherbit.io/v2.0/forecast/daily";
  const weatherbitApiKey = process.env.WEATHERBIT_API_KEY;
  const { latitude, longitude } = coordinates;
  const queryParams = {
    lat: latitude,
    lon: longitude,
    days: days,
    key: weatherbitApiKey,
  };

  try {
    const response = await axios.get(apiRoot, { params: queryParams });
    const { data: forecastArray } = response.data;
    const {
      temp: temperature,
      pop: precipitation,
      weather: { description },
    } = forecastArray[days - 1];
    const ok =
      temperature !== undefined &&
      precipitation !== undefined &&
      description !== undefined;
    const data = ok ? { temperature, precipitation, description } : null;
    return { ok, data };
  } catch {
    return { ok: false, data: null };
  }
};

const fetchLocationPictureURL = async (locationName) => {
  const apiRoot = "https://pixabay.com/api";
  const pixabayApiKey = process.env.PIXABAY_API_KEY;
  const queryParams = {
    q: locationName,
    category: "travel",
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
    key: pixabayApiKey,
  };

  try {
    const response = await axios.get(apiRoot, { params: queryParams });
    const { hits: searchResults } = response.data;
    const { webformatURL: imageURL } = searchResults[0];
    const ok = imageURL !== undefined;
    const data = ok ? { imageURL } : null;
    return { ok, data };
  } catch {
    return { ok: false, data: null };
  }
};

module.exports = {
  fetchCoordinates,
  fetchWeatherForecast,
  fetchLocationPictureURL,
};
