import {
  fetchCoordinatesFromServer,
  fetchForecastFromServer,
  fetchLocationPictureURLFromServer,
} from "./serverDataFetchers";

import dayjs from "dayjs";

const fetchTripData = async () => {
  const locationName = document.querySelector("#location").value;
  const tripDate = dayjs(document.querySelector("#date").value);
  const today = dayjs();
  const daysToGo = tripDate.diff(today, "days");
  const days = daysToGo <= 6 ? 1 : daysToGo;

  const coordinates = await fetchCoordinatesFromServer(locationName);
  const forecast = await fetchForecastFromServer(days, coordinates);
  const locationPictureURL = await fetchLocationPictureURLFromServer(
    locationName
  );

  return { locationName, tripDate, forecast, locationPictureURL };
};

export default fetchTripData;
