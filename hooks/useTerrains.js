// useTerrains.js (modified)
import { useState, useEffect } from "react";
import { fetchTerrains } from "@/services/terrain/index";

const useTerrains = () => {
  const [terrains, setTerrains] = useState([]);
  const [selectedTerrain, setSelectedTerrain] = useState(null);

  useEffect(() => {
    const fetchTerrainsData = async () => {
      try {
        const data = await fetchTerrains();
        console.log(data);
        setTerrains(data);
      } catch (error) {
        console.error("Error fetching terrains:", error);
      }
    };

    fetchTerrainsData();
  }, []);

  const handleTerrainChange = (terrainId) => {
    setSelectedTerrain(terrainId === "" ? null : terrainId);
  };

  return {
    terrains,
    selectedTerrain,
    handleTerrainChange,
  };
};

export default useTerrains;
