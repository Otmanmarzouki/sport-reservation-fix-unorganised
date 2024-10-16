import React, { useState, useMemo } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Container from "@/components/Container";
export default function TauxOccupation() {
  const [openTab, setOpenTab] = useState(1);
  const [TerrainNum, setTerrainNum] = useState(1);

  const incrementCount = () => {
    setTerrainNum(TerrainNum + 1);
  };

  const decrementCount = () => {
    if (TerrainNum == 1) {
      setTerrainNum(1);
    } else {
      setTerrainNum(TerrainNum - 1);
    }
  };
  return (
    <>
      <Container>
        <div className="flex flex-col w-full ">
          <div className="flex  text-xl font-semibold pb-3">Taux doccupation</div>
          <div className="flex  flex-col space-y-5">
            <div className="flex flex-row  justify-between ">
              <div className="flex flex-row w-1/2 justify-start items-center lg:space-x-3">
                <MdKeyboardArrowLeft className=" text-sm lg:text-xl  " onClick={decrementCount} />
                <div className="flex  text-xs lg:text-3xl font-semibold">Terrain {TerrainNum}</div>
                <MdKeyboardArrowRight className=" text-sm lg:text-xl " onClick={incrementCount} />
              </div>
              <div className="flex w-1/2 justify-end">
                <select
                  data-te-select-init
                  className="flex lg:px-2 bg-blue-500 rounded text-white text-xs lg:text-sm"
                >
                  <option value="1">30 derniers Jours</option>
                  <option value="2">Une Semaine</option>
                  <option value="3">Un jour</option>
                </select>
              </div>
            </div>
            <ul className="flex flex-row ">
              <li className="flex flex-col w-1/2 ">
                <a
                  href="#"
                  onClick={() => setOpenTab(1)}
                  className={
                    openTab === 1
                      ? "flex w-full px-4 py-2 text-gray-600 bg-white shadow  border-b-2 border-blue-600 "
                      : "flex w-full px-4 py-2 text-gray-600 bg-white shadow "
                  }
                >
                  Synthése
                </a>
              </li>
              <li className="flex w-1/2">
                <a
                  href="#"
                  onClick={() => setOpenTab(2)}
                  className={
                    openTab === 2
                      ? "flex w-full px-4 py-2 text-gray-600 bg-white shadow  border-b-2 border-orange-600 "
                      : "flex w-full px-4 py-2 text-gray-600 bg-white shadow "
                  }
                >
                  Détaille
                </a>
              </li>
            </ul>
          </div>
          <div className=" p-2 bg-white border rounded-b-xl">
            <div className={openTab === 1 ? "block" : "hidden"}>
              <div className="flex flex-col">
                <div className="flex flex-row space-x-4">
                  <div className="flex flex-row space-x-1 ">
                    <div className=" flex items-center">
                      <div className="flex h-3 w-3 bg-orange-600 rounded-full "></div>
                    </div>

                    <div>Club</div>
                  </div>

                  <div className="flex items-center text-gray-400 text-xl">
                    <AiOutlineExclamationCircle />
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row space-y-4  lg:space-y-0 ">
                  <div className=" lg:w-1/2 ">
                    <div className="flex flex-row space-x-2 text-gray-400  text-xs lg:text-sm ">
                      <div className="w-full flex  h-2 rounded-full  bg-orange-300   ">
                        <div className="bg-orange-600  rounded-full w-1/4 "></div>
                      </div>
                      <div className="flex h-1 items-center ">
                        <div>25%</div>
                      </div>
                    </div>
                  </div>
                  <div className=" lg:w-1/2 ">
                    <div className="flex flex-row justify-evenly text-gray-400  text-xs lg:text-sm ">
                      <div className="flex h-1 items-center ">
                        <div>0 Minutes</div>
                      </div>
                      <div className="flex h-1 items-center ">
                        <div>0 hours</div>
                      </div>
                      <div className="flex h-1 items-center ">
                        <div>0 Jours</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row space-x-4 pt-8">
                  <div className="flex flex-row space-x-1 ">
                    <div className=" flex items-center">
                      <div className="flex h-3 w-3 bg-blue-700 rounded-full "></div>
                    </div>

                    <div>Utilisateurs</div>
                  </div>

                  <div className="flex items-center text-gray-400 text-xl">
                    <AiOutlineExclamationCircle />
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row space-y-4  lg:space-y-0 pt-8 ">
                  <div className=" lg:w-1/2 ">
                    <div className="flex flex-row space-x-2  text-gray-400  text-xs lg:text-sm">
                      <div className="w-full flex  h-2 rounded-full  bg-blue-300   ">
                        <div className="bg-blue-600  rounded-full w-1/4 "></div>
                      </div>
                      <div className="flex h-1 items-center ">
                        <div>25%</div>
                      </div>
                    </div>
                  </div>
                  <div className=" lg:w-1/2 ">
                    <div className="flex flex-row justify-evenly text-gray-400  text-xs lg:text-sm ">
                      <div className="flex h-1 items-center ">
                        <div>0 Minutes</div>
                      </div>
                      <div className="flex h-1 items-center ">
                        <div>0 hours</div>
                      </div>
                      <div className="flex h-1 items-center ">
                        <div>0 Jours</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row space-x-4 pt-8">
                  <div className="flex flex-row space-x-1 ">
                    <div className=" flex items-center">
                      <div className="flex h-3 w-3 bg-cyan-600 rounded-full "></div>
                    </div>

                    <div>Inoccupé</div>
                  </div>

                  <div className="flex items-center text-gray-400 text-xl">
                    <AiOutlineExclamationCircle />
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row space-y-4  lg:space-y-0 pt-8 ">
                  <div className=" lg:w-1/2 ">
                    <div className="flex flex-row space-x-2  text-gray-400  text-xs lg:text-sm">
                      <div className="w-full flex  h-2 rounded-full  bg-cyan-200  ">
                        <div className="bg-cyan-500  rounded-full w-1/4 "></div>
                      </div>
                      <div className="flex h-1 items-center ">
                        <div>25%</div>
                      </div>
                    </div>
                  </div>
                  <div className=" lg:w-1/2 ">
                    <div className="flex flex-row justify-evenly  text-gray-400  text-xs lg:text-sm">
                      <div className="flex h-1 items-center ">
                        <div>0 Minutes</div>
                      </div>
                      <div className="flex h-1 items-center ">
                        <div>0 hours</div>
                      </div>
                      <div className="flex h-1 items-center ">
                        <div>0 Jours</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col w-full lg:flex-row pt-10 space-y-4 ">
                  <div className="flex w-full lg:w-1/2  ">
                    <div className="flex w-full lg:justify-end lg:px-4">
                      <div>Taux doccupation :</div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full lg:w-1/2 ">
                    <div className=" flex w-full h-px border-0 bg-gray-400"></div>
                    <div className="flex w-full flex-row  lg:justify-around justify-between text-gray-400  text-xs lg:text-sm space-x-2">
                      <div>25%</div>
                      <div className="flex w-full  flex-row justify-around ">
                        <div>0 Minutes</div>
                        <div>0 hours</div>
                        <div>0 Jours</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={openTab === 2 ? "block" : "hidden"}>test</div>
          </div>
        </div>
      </Container>
    </>
  );
}
