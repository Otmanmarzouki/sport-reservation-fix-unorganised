import React from "react";

const TerrainSelector = ({ terrains, selectedTerrain, handleTerrainChange }) => {
  const handleChange = (e) => {
    handleTerrainChange(Number(e.target.value));
  };

  return (
    <div>
      <select
        value={selectedTerrain || ""}
        onChange={handleChange}
        className="shadow w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="">Select Terrain</option>
        {terrains.map((terrain) => (
          <option key={terrain.id} value={terrain.id}>
            {terrain.activité}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TerrainSelector;
