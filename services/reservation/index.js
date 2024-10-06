export const fetchTerrains = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/getTerrain");
    return await response.json();
  } catch (error) {
    console.error("Error fetching terrains:", error);
    return [];
  }
};

export const fetchReservations = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/getReservations");
    return await response.json();
  } catch (error) {
    console.error("Error fetching reservations:", error);
    return [];
  }
};

export const addReservation = async (formData) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/addReservation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      return await response.json();
    } else {
      console.error("Form submission failed:", response.statusText);
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};
