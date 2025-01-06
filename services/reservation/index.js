export const fetchReservations = async () => {
  try {
    const response = await fetch("http://localhost:8000/api/getReservations");
    return await response.json();
  } catch (error) {
    console.error("Error fetching reservations:", error);
    return [];
  }
};

export const addReservation = async (formData) => {
  try {
    const response = await fetch("http://localhost:8000/api/addReservation", {
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

export const updateReservationStatus = async (id) => {
  try {
    const response = await fetch(`http://localhost:8000/api/reservations/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      return await response.json();
    } else {
      console.error("Failed to update reservation status:", response.statusText);
      throw new Error("Failed to update reservation status");
    }
  } catch (error) {
    console.error("Error updating reservation status:", error);
    throw error;
  }
};

export const cancelReservation = async (id) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/cancel/reservation/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      return await response.json();
    } else {
      console.error("Failed to update reservation status:", response.statusText);
      throw new Error("Failed to update reservation status");
    }
  } catch (error) {
    console.error("Error updating reservation status:", error);
    throw error;
  }
};
