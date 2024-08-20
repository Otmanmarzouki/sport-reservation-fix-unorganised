export const deleteTerrain = async (terrainId) => {
  try {
    const baseEndpoint = "http://127.0.0.1:8000/api/deleteTerrain";
    const endpoint = `${baseEndpoint}?id=${terrainId}`;
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
