import fetchTripData from "./fetchTripData";
import createTripCard from "./createTripCard";

const addTrip = async () => {
  try {
    const tripData = await fetchTripData();
    const tripCard = createTripCard(tripData);
    document.querySelector(".no-trips").classList.add("no-trips--hidden");
    document.querySelector(".trips-container").appendChild(tripCard);
  } catch (error) {
    alert(error);
  }
};

export default addTrip;
