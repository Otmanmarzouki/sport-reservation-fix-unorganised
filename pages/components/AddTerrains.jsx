import React, { useState } from "react";

import TitleComponentContent from "./SubComponents/TitleContentComponent";
import SpinnerComponent from "./SubComponents/SpinnerComponent";
import ReusableInput from "@/components/terrain/ReusableInput";
import ReusableButton from "@/components/terrain/ReusableButton";
import ReusableDropdown from "@/components/terrain/ReusableDropdown";
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
  const [IdTerrain, setIdTerrain] = useState("");
  const [NameTerrain, setNameTerrain] = useState("");
  const [CapacityTerrain, setCapacityTerrain] = useState("");
  const [ActivityTerrain, setActivityTerrain] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(10);
  const [selectedOption, setSelectedOption] = useState(null);

  function SpinnerDelay() {
    setTimeout(function () {
      setIsLoading(false);
    }, 2000);
  }
  const handleSelectChange = (value) => {
    setSelectedOption(value);
  };
  const handleCountChange = (newValue) => {
    setCount(newValue);
  };
  async function AddTerrain() {
    setIsLoading(true);

    await fetch("http://127.0.0.1:8000/api/addTerrain", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Nom_Terrain: NameTerrain,
        Capacité: CapacityTerrain,
        activité: ActivityTerrain,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    setActivityTerrain("");
    setCapacityTerrain("");
    setIdTerrain("");
    setNameTerrain("");
    SpinnerDelay();
  }

  return (
    <>
      <main className=" w-full bg-gray-100 overflow-y-auto p-2 lg:p-10">
        <div className=" w-full  lg:px-10  bg-gray-50  shadow-md rounded ">
          <div className="flex flex-col lg:flex-row   pt-10 pb-2  ">
            <div className="flex  w-full lg:flex-row flex-col lg:justify-between ">
              <div className="flex w-full flex-col gap-2">
                <div className=" lg:mx-0 mx-5  text-gray-400 text-sm ">Nom du terrain :</div>
                <div className="flex  w-full mb-4  lg:justify-start justify-center">
                  <input
                    className=" w-4/5 lg:w-60 h-8 appearance-none border  rounded  py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="Telephone"
                    type="text"
                    placeholder="Terrain"
                  />
                </div>
              </div>

              <div className="flex w-full flex-col gap-2  ">
                <div className=" lg:mx-0 mx-5  text-gray-400 text-sm ">Dimensions :</div>
                <ReusableInput
                  initialValue={count} // Pass initial value
                  type="number" // Set type to number
                  onChange={handleCountChange} // Provide onChange handler
                  showButton={true} // Show increment button
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row  pb-2">
            <div className="flex  w-full lg:flex-row flex-col lg:justify-between  ">
              <div className="flex flex-col w-full">
                <div className=" lg:mx-0 mx-5  text-gray-400 text-sm ">Acivitées:</div>
                <ReusableDropdown
                  options={activity}
                  initialValue={selectedOption}
                  onChange={handleSelectChange}
                />
              </div>
              <div className="flex flex-col w-full gap-2">
                <div className=" lg:mx-0 mx-5  text-gray-400 text-sm ">Type de terrain:</div>
                <ReusableDropdown
                  options={terrain}
                  initialValue={selectedOption}
                  onChange={handleSelectChange}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row  pb-2  ">
            <div className="flex  w-full lg:flex-row flex-col lg:justify-between  ">
              <div className="flex flex-col w-full gap-2">
                <div className="lg:mx-0 mx-5  text-gray-400 text-sm ">
                  Capacité maximum/Joueurs:
                </div>
                <ReusableInput
                  initialValue={count} // Pass initial value
                  type="number" // Set type to number
                  onChange={handleCountChange} // Provide onChange handler
                  showButton={true} // Show increment button
                />
              </div>

              <div className="flex flex-col w-full gap-2">
                <div className="lg:mx-0 mx-5  text-gray-400 text-sm ">Prix par heur/person:</div>
                <ReusableInput
                  initialValue={count} // Pass initial value
                  type="number" // Set type to number
                  onChange={handleCountChange} // Provide onChange handler
                  showButton={true} // Show increment button
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row   pt-16 pb-2  ">
            <div className="flex  w-full lg:flex-row flex-col lg:justify-between  ">
              <div className="flex w-full  mb-4 lg:mx-2 flex-row lg:space-x-2 lg:justify-around justify-evenly">
                <ReusableButton
                  className="h-8 w-20 lg:w-28 bg-transparent border border-blue-500 rounded-lg text-blue-400  text-sm"
                  label="Cancel"
                />
                <ReusableButton
                  className="  h-8 w-20 lg:w-28  bg-blue-500 rounded-lg text-white  text-sm  "
                  label="valider"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
