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

<<<<<<< HEAD
export const getClientsCountBySport = async (activité) => {
  try {
      const response = await fetch(`http://127.0.0.1:8000/api/clients-count-by-sport`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ activité }),
      });

      if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Error fetching data');
      }

      const data = await response.json();
      return data; 
  } catch (error) {
      console.error('Error fetching clients count by sport:', error);
      throw error; 
  }
};
=======
export const updateReservationStatus = async (id) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/reservations/${id}`, {
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
>>>>>>> d9e60c44fb3658d1d15d7bca75580e5ee114370e
