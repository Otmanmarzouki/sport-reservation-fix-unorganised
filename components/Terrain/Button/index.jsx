import React from "react";
import { validateTerrainData } from "./validate";
import { addTerrain, updateTerrain } from "@/services/terrain";

export default function TerrainButton({
  className,
  label,
  terrainData,
  isLoading,
  setIsLoading,
  setErrors,
  actionType,
  terrainId,
}) {
  const handleClick = async () => {
    const errors = validateTerrainData(terrainData);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    setIsLoading(true);
    try {
      let result;
      if (actionType === "update") {
        console.log("Updated terrain data:", terrainData);
        console.log(terrainId);
        result = await updateTerrain(terrainId, terrainData);
      } else if (actionType === "add") {
        result = await addTerrain(terrainData);
      }
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button className={className} onClick={handleClick} disabled={isLoading}>
      {isLoading ? "Loading..." : label}
    </button>
  );
}
