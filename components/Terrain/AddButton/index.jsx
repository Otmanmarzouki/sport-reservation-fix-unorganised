import React from "react";
import { validateTerrainData } from "./validate"; // Adjust the import path accordingly

export default function AddButton({
  className,
  label,
  terrainData,
  isLoading,
  setIsLoading,
  setErrors,
}) {
  const handleClick = async () => {
    const errors = validateTerrainData(terrainData);

    if (Object.keys(errors).length > 0) {
      setErrors(errors); // Set errors if validation fails
      return; // Stop further execution
    }

    setIsLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/addTerrain", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(terrainData),
      });

      if (!response.ok) {
        throw new Error("Failed to add terrain");
      }

      const data = await response.json();
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
