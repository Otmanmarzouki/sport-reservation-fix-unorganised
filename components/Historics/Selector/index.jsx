import React from "react";

const TerrainSelector = ({ terrains, selectedTerrain, onTerrainChange }) => {
  const handleChange = (e) => {
    onTerrainChange(e.target.value);
  };

  return (
    <div className="flex w-full justify-center">
      <select
        className="py-1 rounded-md text-sm lg:px-8 border-2"
        value={selectedTerrain}
        onChange={handleChange}
      >
        <option value="">Select Terrain</option>
        {terrains.map((terrain) => (
          <option key={terrain.id} value={terrain.id}>
            {terrain.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TerrainSelector;
