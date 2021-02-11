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
    const ok = Boolean(latitude && longitude);
    const data = ok ? { latitude, longitude } : null;
    return { ok, data };
  } catch {
    return { ok: false, data: null };
  }
};

module.exports = {
  fetchCoordinates,
};
