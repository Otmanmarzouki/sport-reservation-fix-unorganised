import React, { useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { HiChartPie } from "react-icons/hi2";
import Container from "@/components/Container";

export default function TauxOccupation() {
  const [openTab, setOpenTab] = useState(1);
  const [terrainNum, setTerrainNum] = useState(1);

  const incrementCount = () => setTerrainNum(terrainNum + 1);
  const decrementCount = () => setTerrainNum(Math.max(1, terrainNum - 1));

  return (
    <Container>
      <div className="flex flex-col w-full">
        <div className="text-xl font-semibold pb-3">Taux doccupation</div>
        <div className="space-y-5">
          {/* Navigation */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <MdKeyboardArrowLeft className="text-xl cursor-pointer" onClick={decrementCount} />
              <div className="text-lg lg:text-3xl font-semibold">Terrain {terrainNum}</div>
              <MdKeyboardArrowRight className="text-xl cursor-pointer" onClick={incrementCount} />
            </div>
            <select className="px-2 py-1 bg-blue-500 text-white text-sm rounded">
              <option value="30-days">30 derniers Jours</option>
              <option value="week">Une Semaine</option>
              <option value="day">Un jour</option>
            </select>
          </div>

          <ul className="flex">
            <li className="w-1/2">
              <button
                onClick={() => setOpenTab(1)}
                className={`flex w-full py-2 p-2 justify-center items-center space-x-2 bg-white shadow ${
                  openTab === 1 ? "border-b-2 border-blue-600 text-gray-900" : "text-gray-600"
                }`}
              >
                <HiChartPie className="text-2xl text-blue-700" />
                <span className="text-lg">Synthèse</span>
              </button>
            </li>
            <li className="w-1/2">
              <button
                onClick={() => setOpenTab(2)}
                className={`flex w-full py-2 p-2 justify-center items-center space-x-2 bg-white shadow ${
                  openTab === 2 ? "border-b-2 border-orange-500 text-gray-900" : "text-gray-600"
                }`}
              >
                <HiChartPie className="text-2xl text-orange-500" />
                <span className="text-lg">Détaille</span>
              </button>
            </li>
          </ul>

          <div className="p-4 bg-white border rounded-b-xl">
            <div className={openTab === 1 ? "block" : "hidden"}>
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="h-3 w-3 bg-orange-600 rounded-full"></span>
                    <span className="text-gray-400 text-sm">Club</span>
                    <AiOutlineExclamationCircle className="text-gray-400 text-xl" />
                  </div>
                  <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
                    <div className="lg:w-1/2">
                      <div className="flex items-center space-x-2 text-xs lg:text-sm text-gray-400">
                        <div className="w-full h-2 bg-orange-300 rounded-full relative">
                          <div
                            className="absolute top-0 left-0 h-2 bg-orange-600 rounded-full"
                            style={{ width: "25%" }}
                          ></div>
                        </div>
                        <span>25%</span>
                      </div>
                    </div>
                    <div className="lg:w-1/2 flex justify-between text-xs lg:text-sm text-gray-400">
                      <span>0 Minutes</span>
                      <span>0 Hours</span>
                      <span>0 Jours</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="h-3 w-3 bg-blue-700 rounded-full"></span>
                    <span className="text-gray-400 text-sm">Utilisateurs</span>
                    <AiOutlineExclamationCircle className="text-gray-400 text-xl" />
                  </div>
                  <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
                    <div className="lg:w-1/2">
                      <div className="flex items-center space-x-2 text-xs lg:text-sm text-gray-400">
                        <div className="w-full h-2 bg-blue-300 rounded-full relative">
                          <div
                            className="absolute top-0 left-0 h-2 bg-blue-600 rounded-full"
                            style={{ width: "25%" }}
                          ></div>
                        </div>
                        <span>25%</span>
                      </div>
                    </div>
                    <div className="lg:w-1/2 flex justify-between text-xs lg:text-sm text-gray-400">
                      <span>0 Minutes</span>
                      <span>0 Hours</span>
                      <span>0 Jours</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="h-3 w-3 bg-cyan-600 rounded-full"></span>
                    <span className="text-gray-400 text-sm">Inoccupé</span>
                    <AiOutlineExclamationCircle className="text-gray-400 text-xl" />
                  </div>
                  <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
                    <div className="lg:w-1/2">
                      <div className="flex items-center space-x-2 text-xs lg:text-sm text-gray-400">
                        <div className="w-full h-2 bg-cyan-200 rounded-full relative">
                          <div
                            className="absolute top-0 left-0 h-2 bg-cyan-500 rounded-full"
                            style={{ width: "25%" }}
                          ></div>
                        </div>
                        <span>25%</span>
                      </div>
                    </div>
                    <div className="lg:w-1/2 flex justify-between text-xs lg:text-sm text-gray-400">
                      <span>0 Minutes</span>
                      <span>0 Hours</span>
                      <span>0 Jours</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:space-x-4  space-y-4  lg:space-y-0 lg:justify-between lg:items-center">
                  <div className="flex lg:w-2/5  lg:justify-end">
                    <span className="text-gray-400 text-sm">Taux doccupation :</span>
                  </div>

                  <div className="lg:w-3/5  h-px bg-gray-400"></div>
                </div>
                <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4  lg:space-y-0 lg:justify-between lg:items-center">
                  <div className="flex lg:w-1/2 justify-end">
                    <span className="text-gray-400 text-sm">25%</span>
                  </div>

                  <div className="lg:w-1/2 flex justify-between text-xs lg:text-sm text-gray-400">
                    <span>0 Minutes</span>
                    <span>0 Hours</span>
                    <span>0 Jours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Détaille Content */}
            <div className={openTab === 2 ? "block" : "hidden"}>
              <p>Details will be displayed here...</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
