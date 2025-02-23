import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ReusableInput from "@/components/Terrain/Input";
import TerrainButton from "./Button";
import ReusableDropdown from "@/components/Dropdown";
import SkeletonLoader from "@/Commons/Loader/index";
import { fetchTerrainById } from "@/services/terrain";
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
export default function EditTerrains() {
  const router = useRouter();
  const { id } = router.query;
  const [terrain, setTerrain] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (id) {
      const loadTerrain = async () => {
        try {
          const fetchedTerrain = await fetchTerrainById(id);
          setTerrain(fetchedTerrain);

          console.log(terrain);
        } catch (error) {
          alert(`Error fetching terrain: ${error.message}`);
        }
      };

      loadTerrain();
    }
  }, [id]);
  const handleChange = (key) => (value) => {
    setTerrain({ ...terrain, [key]: value });
  };

  if (!terrain) {
    return (
      <div className="flex items-center justify-center  w-full bg-gray-100">
        <div className="w-full lg:w-3/4 bg-gray-50  shadow-md rounded p-4">
          <SkeletonLoader />
        </div>
      </div>
    );
  }

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
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row pb-2">
          <div className="flex w-full lg:flex-row flex-col lg:justify-between">
            <div className="flex flex-col w-full">
              <div className="lg:mx-0 mx-5 text-gray-400 text-sm">Activité:</div>
              <ReusableDropdown
                value={terrain.activité}
                options={activity}
                onChange={handleChange("activité")}
              />
            </div>

            <div className="flex flex-col w-full ">
              <div className="lg:mx-0 mx-5 text-gray-400 text-sm">Type de terrain:</div>
              <ReusableDropdown
                value={terrain.type_Terrain}
                options={terrainOptions}
                onChange={handleChange("type_Terrain")}
              />
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
                terrainId={id}
                actionType="update"
                terrainData={terrain}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
