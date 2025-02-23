import React, { useState } from "react";
import ReusableInput from "@/components/Terrain/Input";
import TerrainButton from "@/components/Terrain/Button";
import ReusableDropdown from "@/components/Dropdown";

const activity = [
  { value: 1, label: "Paddle" },
  { value: 2, label: "Tennis" },
  { value: 3, label: "Mini Foot" },
];

const terrainOptions = [
  { value: 1, label: "Goudron" },
  { value: 2, label: "Herbe" },
  { value: 3, label: "Gravier" },
];

export default function AddTerrains() {
  const [terrain, setTerrain] = useState({
    Nom_Terrain: "",
    dimension1: "",
    dimension2: "",
    activité: "",
    type_Terrain: "",
    Capacité: "",
    prix: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (key) => (value) => {
    setTerrain({ ...terrain, [key]: value });
  };

  return (
    <main className="w-full bg-gray-100 overflow-y-auto p-2 lg:p-10">
      <div className="w-full lg:px-10 bg-gray-50 shadow-md rounded">
        <div className="flex flex-col lg:flex-row pt-10 pb-2">
          <div className="flex w-full lg:flex-row flex-col lg:justify-between">
            <div className="flex w-full flex-col gap-2">
              <div className="lg:mx-0 mx-5 text-gray-400 text-sm">Nom du terrain:</div>
              <ReusableInput
                className="w-4/5 h-8  appearance-none border rounded py-1 px-2 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                initialValue={terrain.Nom_Terrain}
                onChange={handleChange("Nom_Terrain")}
              />
              {errors.Nom_Terrain && (
                <div className="text-red-500 text-xs">{errors.Nom_Terrain}</div>
              )}
            </div>

            <div className="flex w-full flex-col gap-2">
              <div className="lg:mx-0 mx-5 text-gray-400 text-sm">Dimensions:</div>
              <div className="flex flex-row ">
                <ReusableInput
                  className="w-28 h-8 appearance-none border rounded py-1 px-2 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  initialValue={terrain.dimension1}
                  type="number"
                  onChange={handleChange("dimension1")}
                  showButton={true}
                />
                <ReusableInput
                  className="w-28 h-8 appearance-none border rounded py-1 px-2 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  initialValue={terrain.dimension2}
                  type="number"
                  onChange={handleChange("dimension2")}
                  showButton={true}
                />
              </div>
              {errors.dimensions && <div className="text-red-500 text-xs">{errors.dimensions}</div>}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row pb-2">
          <div className="flex w-full lg:flex-row flex-col lg:justify-between">
            <div className="flex flex-col w-full">
              <div className="lg:mx-0 mx-5 text-gray-400 text-sm">Activité:</div>
              <ReusableDropdown
                options={activity}
                value={terrain.activité}
                onChange={handleChange("activité")}
              />
              {errors.activité && <div className="text-red-500 text-xs">{errors.activité}</div>}
            </div>

            <div className="flex flex-col w-full ">
              <div className="lg:mx-0 mx-5 text-gray-400 text-sm">Type de terrain:</div>
              <ReusableDropdown
                options={terrainOptions}
                value={terrain.type_Terrain}
                onChange={handleChange("type_Terrain")}
              />
              {errors.type_Terrain && (
                <div className="text-red-500 text-xs">{errors.type_Terrain}</div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row pb-2">
          <div className="flex w-full lg:flex-row flex-col lg:justify-between">
            <div className="flex flex-col w-full gap-2">
              <div className="lg:mx-0 mx-5 text-gray-400 text-sm">Capacité maximum/Joueurs:</div>
              <ReusableInput
                className="w-28 h-8 appearance-none border rounded py-1 px-2 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                initialValue={terrain.Capacité}
                type="number"
                onChange={handleChange("Capacité")}
                showButton={true}
              />
              {errors.Capacité && <div className="text-red-500 text-xs">{errors.Capacité}</div>}
            </div>

            <div className="flex flex-col w-full gap-2">
              <div className="lg:mx-0 mx-5 text-gray-400 text-sm">Prix par heure/personne:</div>
              <ReusableInput
                className="w-28 h-8 appearance-none border rounded py-1 px-2 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                initialValue={terrain.prix}
                type="number"
                onChange={handleChange("prix")}
                showButton={true}
              />
              {errors.prix && <div className="text-red-500 text-xs">{errors.prix}</div>}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row pt-16 pb-2">
          <div className="flex w-full lg:flex-row flex-col lg:justify-between">
            <div className="flex w-full mb-4 lg:mx-2 flex-row lg:space-x-2 lg:justify-around justify-evenly">
              <TerrainButton
                className="h-8 w-20 lg:w-28 bg-transparent border border-blue-500 rounded-lg text-blue-400 text-sm"
                label="Cancel"
              />
              <TerrainButton
                className="h-8 w-20 lg:w-28 bg-blue-500 rounded-lg text-white text-sm"
                label="Valider"
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                setErrors={setErrors}
                actionType="add"
                terrainData={terrain}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
