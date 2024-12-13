import React from "react";

const TerrainSelector = ({ terrains, selectedTerrain, onTerrainChange }) => {
  const handleChange = (e) => {
    const selectedValue = e.target.value === "" ? null : e.target.value;
    onTerrainChange(selectedValue);
  };

  return (
    <div className="flex w-full justify-center">
      <select
        className="py-1 rounded-md text-sm lg:px-8 border-2"
        value={selectedTerrain || ""}
        onChange={handleChange}
      >
        <option value="">All Terrains</option>
        {terrains.map((terrain) => (
          <option key={terrain.terrain_id} value={terrain.terrain_id}>
            {terrain.terrain_name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TerrainSelector;
