const express = require("express");
const cors = require("cors");

const {
  fetchCoordinates,
  fetchWeatherForecast,
  fetchLocationPictureURL,
} = require("./apiDataFetchers");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(express.static("public"));

app.get("/coordinates/:location", async (request, response) => {
  const locationName = request.params["location"];
  const fetchResponse = await fetchCoordinates(locationName);
  response.send(fetchResponse);
});

app.get("/forecast/:days/:latitude/:longitude", async (request, response) => {
  const days = request.params["days"];
  const coordinates = {
    latitude: request.params["latitude"],
    longitude: request.params["longitude"],
  };
  const fetchResponse = await fetchWeatherForecast(days, coordinates);
  response.send(fetchResponse);
});

app.get("/picture/:location", async (request, response) => {
  const locationName = request.params["location"];
  const fetchResponse = await fetchLocationPictureURL(locationName);
  response.send(fetchResponse);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
  console.log("Press Ctrl+C to quit");
});
