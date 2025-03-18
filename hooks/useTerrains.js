// useTerrains.js (modified)
import { useState, useEffect } from "react";
import { fetchTerrains } from "@/services/terrain/index";

const useTerrains = () => {
  const [terrains, setTerrains] = useState([]);
  const [terrainId, setTerrainId] = useState(null);

  useEffect(() => {
    const fetchTerrainsData = async () => {
      try {
        const data = await fetchTerrains();
        setTerrains(data);
      } catch (error) {
        console.error("Error fetching terrains:", error);
      }
    };

    fetchTerrainsData();
  }, []);

  const handleTerrainChange = (terrainId) => {
    setTerrainId(terrainId === "" ? null : terrainId);
  };

  return {
    terrains,
    terrainId,
    handleTerrainChange,
  };
};

export default useTerrains;
