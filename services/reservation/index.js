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
  console.log("from service ", formData);
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

export const updateReservation = async (id, condition) => {
  const action = {};
  if (condition === "drafts") {
    action.drafts = false;
  } else if (condition === "canceled") {
    action.canceled = true;
  }

  try {
    const response = await fetch(`http://localhost:8000/api/updateReservation/${id}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(action),
    });

    if (!response.ok) {
      console.error("Failed to update reservation:", response.statusText);
      throw new Error("Failed to update reservation");
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating reservation:", error);
    throw error;
  }
};
