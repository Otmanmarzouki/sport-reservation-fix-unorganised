import React, { useState } from "react";

import TitleComponentContent from "./SubComponents/TitleContentComponent";
import SpinnerComponent from "./SubComponents/SpinnerComponent";

export default function AddTerrains() {
  const [IdTerrain, setIdTerrain] = useState("");
  const [NameTerrain, setNameTerrain] = useState("");
  const [CapacityTerrain, setCapacityTerrain] = useState("");
  const [ActivityTerrain, setActivityTerrain] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function SpinnerDelay() {
    setTimeout(function () {
      setIsLoading(false);
    }, 2000);
  }

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

                <div className="flex  w-full lg:flex-row  flex-col gap-2">
                  <div className="flex w-full flex-row lg:space-x-2 lg:justify-start justify-evenly">
                    <div className="flex justify-center ">
                      <input
                        className=" w-28 h-8 appearance-none border  rounded  py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="Telephone"
                        type="text"
                        placeholder="42"
                      />
                    </div>
                    <div className="flex justify-center">
                      <button className="  h-8 w-8  bg-blue-500 rounded-sm text-white    text-lg">
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex w-full flex-row lg:space-x-2 lg:justify-start justify-evenly ">
                    <div className=" flex justify-center ">
                      <input
                        className=" w-28 h-8 appearance-none border  rounded  py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="Telephone"
                        type="text"
                        placeholder="33"
                      />
                    </div>
                    <div className=" flex  justify-center">
                      <button className="  h-8 w-8  bg-blue-500 rounded-sm text-white    text-lg">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row  pb-2">
            <div className="flex  w-full lg:flex-row flex-col lg:justify-between  ">
              <div className="flex flex-col w-full">
                <div className=" lg:mx-0 mx-5  text-gray-400 text-sm ">Acivitées:</div>
                <div className="flex  w-full mb-4  lg:justify-start justify-center">
                  <div className=" my-2 p-1 bg-white  border border-gray-200  rounded w-4/5 lg:w-60">
                    <select
                      data-te-select-init
                      className=" text-gray-400 w-full bg-white outline-none"
                    >
                      <option value="1">Activité</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full gap-2">
                <div className=" lg:mx-0 mx-5  text-gray-400 text-sm ">Type de terrain:</div>
                <div className="flex  w-full mb-4  lg:justify-start justify-center">
                  <div className=" my-2 p-1 bg-white  border border-gray-200  rounded w-4/5 lg:w-60">
                    <select
                      data-te-select-init
                      className=" text-gray-400 w-full bg-white outline-none"
                    >
                      <option value="1">Type</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row  pb-2  ">
            <div className="flex  w-full lg:flex-row flex-col lg:justify-between  ">
              <div className="flex flex-col w-full gap-2">
                <div className="lg:mx-0 mx-5  text-gray-400 text-sm ">
                  Capacité maximum/Joueurs:
                </div>
                <div className="flex w-full  mb-4  flex-row lg:space-x-2 lg:justify-start justify-evenly">
                  <div className="flex justify-center ">
                    <input
                      className=" w-28  h-8 appearance-none border  rounded  py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="Telephone"
                      type="text"
                      placeholder="11"
                    />
                  </div>
                  <div className="flex justify-center">
                    <button className="  h-8 w-8  bg-blue-500 rounded-sm text-white    text-lg">
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-full gap-2">
                <div className="lg:mx-0 mx-5  text-gray-400 text-sm ">Prix par heur/person:</div>
                <div className="flex w-full  mb-4  flex-row lg:space-x-2 lg:justify-start justify-evenly">
                  <div className="flex justify-center ">
                    <input
                      className=" w-28  h-8 appearance-none border  rounded  py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="Telephone"
                      type="text"
                      placeholder="11"
                    />
                  </div>
                  <div className="flex justify-center">
                    <button className="  h-8 w-8  bg-blue-500 rounded-sm text-white    text-lg">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row   pt-16 pb-2  ">
            <div className="flex  w-full lg:flex-row flex-col lg:justify-between  ">
              <div className="flex w-full  mb-4 lg:mx-2 flex-row lg:space-x-2 lg:justify-around justify-evenly">
                <div className="flex justify-center ">
                  <button className="  h-8 w-20 lg:w-28 bg-transparent border border-blue-500 rounded-lg text-blue-400  text-sm">
                    Annuler
                  </button>
                </div>
                <div className="flex justify-center">
                  <button className="  h-8 w-20 lg:w-28  bg-blue-500 rounded-lg text-white  text-sm  ">
                    Valider
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
