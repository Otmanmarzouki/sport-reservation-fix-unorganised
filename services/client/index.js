export const fetchClients = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/getClients");
    return await response.json();
  } catch (error) {
    console.error("Error fetching terrains:", error);
    return [];
  }
};
export const deleteClient = async (clientId) => {
  try {
    const baseEndpoint = "http://127.0.0.1:8000/api/deleteClient";
    const endpoint = `${baseEndpoint}?id=${clientId}`;
    const response = await fetch(endpoint, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to delete the terrain.");
    }

    return true;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
};
