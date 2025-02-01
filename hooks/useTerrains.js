// useTerrains.js (modified)
import { useState, useEffect } from "react";
import { fetchTerrains } from "@/services/terrain/index";

const useTerrains = () => {
  const [terrains, setTerrains] = useState([]);
  const [activité, setActivité] = useState(null);

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
    setActivité(terrainId === "" ? null : terrainId);
  };

  return {
    terrains,
    activité,
    handleTerrainChange,
  };
};

export default useTerrains;
