export async function getCoordsDetails(popupCoords) {
  if (!popupCoords || popupCoords.length !== 2) {
    throw new Error("Invalid coordinates");
  }

  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${popupCoords[0]}&lon=${popupCoords[1]}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data from API");
    }

    const data = await response.json();
    console.log("API response data:", data); // Log API response data
    return data;
  } catch (error) {
    console.error("Error fetching coordinates details:", error);
    throw error;
  }
}
