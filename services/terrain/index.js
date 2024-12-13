const API_BASE_URL = "http://127.0.0.1:8000/api/terrain";

export const fetchTerrains = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/terrains");
    return await response.json();
  } catch (error) {
    console.error("Error fetching terrains:", error);
    return [];
  }
};

export const addTerrain = async (terrainData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/ajouter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(terrainData),
    });
    if (!response.ok) {
      throw new Error("Failed to add terrain");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching terrain:", error.message);
    throw error;
  }
};

export const fetchTerrainById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to fetch terrain.");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching terrain:", error.message);
    throw error;
  }
};

export const updateTerrain = async (id, updatedTerrain) => {
  try {
    const response = await fetch(`${API_BASE_URL}/modifier/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTerrain),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to update terrain.");
    }
    return await response.json();
  } catch (error) {
    console.error("Error updating terrain:", error.message);
    throw error;
  }
};

export const deleteTerrain = async (terrainId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/delete/${terrainId}`, {
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
