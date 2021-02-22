import dayjs from "dayjs";

const createTripCard = (tripData) => {
  const {
    locationName,
    tripDate,
    forecast: { temperature, precipitation, description },
    locationPictureURL,
  } = tripData;
  const locationPicture = createLocationPictureElement(
    locationPictureURL,
    locationName
  );
  const mainDetails = createMainDetailsDiv(locationName, tripDate);
  const forecastDetails = createForecastDetailsDiv(
    description,
    temperature,
    precipitation
  );

  // create trip-card containing location-picture, main-details and
  // forecast-details
  const tripCard = document.createElement("article");
  tripCard.classList.add("trip-card");
  tripCard.appendChild(locationPicture);
  tripCard.appendChild(mainDetails);
  tripCard.appendChild(forecastDetails);

  return tripCard;
};

function createLocationPictureElement(locationPictureURL, locationName) {
  // create image element with location picture
  const locationPicture = document.createElement("img");
  locationPicture.setAttribute("src", locationPictureURL);
  locationPicture.setAttribute("alt", `Picture taken in ${locationName}`);
  return locationPicture;
}

function createMainDetailsDiv(locationName, tripDate) {
  const daysToGo = tripDate.diff(dayjs(), "days");

  // create span element with location name
  const locationNameSpan = document.createElement("span");
  locationNameSpan.innerText = locationName;
  locationNameSpan.classList.add("main-details__location");

  // create span element with days to go information
  const daysToGoSpan = document.createElement("span");
  daysToGoSpan.setAttribute(
    "title",
    `Trip date: ${tripDate.format("DD/MM/YYYY")}`
  );
  daysToGoSpan.classList.add("main-details__days");
  daysToGoSpan.innerText = `${daysToGo < 0 ? "N/A" : daysToGo} ${
    daysToGo === 1 ? "day" : "days"
  } to go`;

  // create main-details div containing location-name and days-to-go information
  const mainDetails = document.createElement("div");
  mainDetails.classList.add("main-details");
  mainDetails.appendChild(locationNameSpan);
  mainDetails.appendChild(daysToGoSpan);
  return mainDetails;
}

function createForecastDetailsDiv(description, temperature, precipitation) {
  // create span element with forecast description
  const forecastDescriptionSpan = document.createElement("span");
  forecastDescriptionSpan.classList.add("forecast-details__description");
  forecastDescriptionSpan.innerText = description;

  // create span element with forecast temperature & precipitation probability
  const forecastDataSpan = document.createElement("span");
  forecastDataSpan.classList.add("forecast-details__data");
  forecastDataSpan.innerText = `${temperature}℃ / ${precipitation}%`;

  // create forecast-details div with forecast-description and forecast-data
  const forecastDetails = document.createElement("div");
  forecastDetails.classList.add("forecast-details");
  forecastDetails.appendChild(forecastDescriptionSpan);
  forecastDetails.appendChild(forecastDataSpan);
  return forecastDetails;
}

export default createTripCard;
