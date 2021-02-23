import fetchTripData from "./fetchTripData";
import createTripCard from "./createTripCard";

const addTrip = async () => {
  const addTripButton = document.querySelector("#add-trip");
  addTripButton.classList.add("button--loading");
  try {
    const tripData = await fetchTripData();
    const tripCard = createTripCard(tripData);
    document.querySelector(".no-trips").classList.add("no-trips--hidden");
    document.querySelector(".trips-container").appendChild(tripCard);

    document.querySelector("#location").value = "";
    document.querySelector("#date").value = "";
  } catch (error) {
    alert(error);
  } finally {
    addTripButton.classList.remove("button--loading");
  }
};

export default addTrip;
