const express = require("express");
const cors = require("cors");

const { fetchCoordinates } = require("./apiDataFetchers");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(express.static("public"));

app.get("/coordinates/:location", async (request, response) => {
  const location = request.params["location"];
  console.log(location);
  const fetchResponse = await fetchCoordinates(location);
  response.send(fetchResponse);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
  console.log("Press Ctrl+C to quit");
});
