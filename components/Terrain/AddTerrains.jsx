import React, { useState } from "react";
import ReusableInput from "@/components/Terrain/Input";
import AddButton from "@/components/Terrain/AddButton";
import ReusableDropdown from "@/components/Dropdown";

const activity = [
  { value: 1, label: "Paddle" },
  { value: 2, label: "Tennis" },
  { value: 3, label: "Mini Foot" },
];

const terrain = [
  { value: 1, label: "Goudron" },
  { value: 2, label: "Herbe" },
  { value: 3, label: "Gravier" },
];

export default function AddTerrains() {
  const [NameTerrain, setNameTerrain] = useState("");
  const [CapacityTerrain, setCapacityTerrain] = useState("");
  const [ActivityTerrain, setActivityTerrain] = useState("");
  const [TypeTerrain, setTypeTerrain] = useState("");
  const [PrixTerrain, setPrixTerrain] = useState("");
  const [Dimension1, setDimension1] = useState("");
  const [Dimension2, setDimension2] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSelectChangeActivity = (value) => setActivityTerrain(value);
  const handleSelectChangeType = (value) => setTypeTerrain(value);

  const handleCountChangeCapacity = (newValue) => setCapacityTerrain(newValue);
  const handleCountChangePrix = (newValue) => setPrixTerrain(newValue);
  const handleDimension1Change = (newValue) => setDimension1(newValue);
  const handleDimension2Change = (newValue) => setDimension2(newValue);
  return (
    <main className="w-full bg-gray-100 overflow-y-auto p-2 lg:p-10">
      <div className="w-full lg:px-10 bg-gray-50 shadow-md rounded">
        <div className="flex flex-col lg:flex-row pt-10 pb-2">
          <div className="flex w-full lg:flex-row flex-col lg:justify-between">
            <div className="flex w-full flex-col gap-2">
              <div className="lg:mx-0 mx-5 text-gray-400 text-sm">Nom du terrain:</div>
              <div className="flex flex-col w-full  lg:justify-start justify-center">
                <input
                  className="w-4/5 lg:w-60 h-8 appearance-none border rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Terrain"
                  value={NameTerrain}
                  onChange={(e) => setNameTerrain(e.target.value)}
                />
              </div>
              {errors.Nom_Terrain && (
                <div className="text-red-500 text-xs">{errors.Nom_Terrain}</div>
              )}
            </div>

            <div className="flex w-full flex-col gap-2">
              <div className="lg:mx-0 mx-5 text-gray-400 text-sm">Dimensions:</div>
              <div className="flex flex-row">
                <ReusableInput
                  className="w-28 h-8 appearance-none border rounded py-1 px-2 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  initialValue={Dimension1}
                  type="number"
                  onChange={handleDimension1Change}
                  showButton={true}
                />
                <ReusableInput
                  className="w-28 h-8 appearance-none border rounded py-1 px-2 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  initialValue={Dimension2}
                  type="number"
                  onChange={handleDimension2Change}
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
                initialValue={ActivityTerrain}
                onChange={handleSelectChangeActivity}
              />
              {errors.activité && <div className="text-red-500 text-xs">{errors.activité}</div>}
            </div>

            <div className="flex flex-col w-full ">
              <div className="lg:mx-0 mx-5 text-gray-400 text-sm">Type de terrain:</div>
              <ReusableDropdown
                options={terrain}
                initialValue={TypeTerrain}
                onChange={handleSelectChangeType}
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
                initialValue={CapacityTerrain}
                type="number"
                onChange={handleCountChangeCapacity}
                showButton={true}
              />
              {errors.Capacité && <div className="text-red-500 text-xs">{errors.Capacité}</div>}
            </div>

            <div className="flex flex-col w-full gap-2">
              <div className="lg:mx-0 mx-5 text-gray-400 text-sm">Prix par heure/personne:</div>
              <ReusableInput
                className="w-28 h-8 appearance-none border rounded py-1 px-2 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                initialValue={PrixTerrain}
                type="number"
                onChange={handleCountChangePrix}
                showButton={true}
              />
              {errors.prix && <div className="text-red-500 text-xs">{errors.prix}</div>}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row pt-16 pb-2">
          <div className="flex w-full lg:flex-row flex-col lg:justify-between">
            <div className="flex w-full mb-4 lg:mx-2 flex-row lg:space-x-2 lg:justify-around justify-evenly">
              <AddButton
                className="h-8 w-20 lg:w-28 bg-transparent border border-blue-500 rounded-lg text-blue-400 text-sm"
                label="Cancel"
              />
              <AddButton
                className="h-8 w-20 lg:w-28 bg-blue-500 rounded-lg text-white text-sm"
                label="Valider"
                terrainData={{
                  Nom_Terrain: NameTerrain,
                  Capacité: CapacityTerrain,
                  activité: ActivityTerrain,
                  type_Terrain: TypeTerrain,
                  prix: PrixTerrain,
                  dimension1: Dimension1,
                  dimension2: Dimension2,
                }}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                setErrors={setErrors}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
