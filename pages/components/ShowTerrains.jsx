import React from "react";
import Link from "next/link";

import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

const ShowTerrains = () => {
  return (
    <>
      <main className="flex flex-col w-full bg-gray-100 overflow-y-auto px-4 space-y-8">
        <div className="flex flex-row justify-between lg:px-6 pt-8">
          <div className=" mx-2">
            <h3 className="lg:text-2xl  text-lg font-semibold ">Terrains</h3>
          </div>

          <div className=" mx-2">
            <Link href="/addTerrain" passHref>
              <button className="inline-flex px-3 py-2 text-white bg-blue-500 rounded-2xl text-xs lg:text-sm ">
                Ajouter un Terrain
              </button>
            </Link>
          </div>
        </div>
        <div className="flex  lg:justify-center lg:px-6">
          <div className=" shadow-lg w-full relative overflow-x-auto bg-white p-6  rounded-lg">
            <table className="w-full text-xs lg:text-sm text-left">
              <thead className="text-xs text-gray-500 font-thin ">
                <tr>
                  <th scope="col" className="  px-3 py-3">
                    Nom Terrain
                  </th>
                  <th scope="col" className=" px-3 py-3">
                    {" "}
                    Type de terrain{" "}
                  </th>

                  <th scope="col" className="  px-3 py-3">
                    Activité
                  </th>

                  <th scope="col" className=" px-3 py-3">
                    {" "}
                    Dimensions
                  </th>
                  <th scope="col" className=" px-3 py-3">
                    Capacité max
                  </th>
                  <th scope="col" className=" px-3 py-3">
                    {" "}
                    Prix par heure(par personne)
                  </th>
                  <th scope="col" className=" px-3 py-3">
                    {" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th
                    scope="row"
                    className="px-3 py-4 font-normal text-gray-600 whitespace-nowrap "
                  >
                    Terrain 3
                  </th>
                  <td className="px-3 py-4">Mini Foot</td>

                  <td className="px-3 py-4">10</td>
                  <td className="px-3 py-4">10</td>
                  <td className="px-3 py-4">10</td>
                  <td className="px-3 py-4">10</td>

                  <td className="px-3 py-4 ">
                    <div className=" flex flex-row space-x-3 text-lg">
                      <button className="bg-transparent bg-gray-200 rounded-lg text-blue-500 p-2">
                        <FiEdit />
                      </button>
                      <button className="bg-transparent">
                        <AiOutlineDelete />
                      </button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th
                    scope="row"
                    className="px-3 py-4 font-normal text-gray-600 whitespace-nowrap "
                  >
                    Terrain 3
                  </th>
                  <td className="px-3 py-4">Mini Foot</td>

                  <td className="px-3 py-4">10</td>
                  <td className="px-3 py-4">10</td>
                  <td className="px-3 py-4">10</td>
                  <td className="px-3 py-4">10</td>

                  <td className="px-3 py-4 ">
                    <div className=" flex flex-row space-x-3 text-lg">
                      <button className="bg-transparent bg-gray-200 rounded-lg text-blue-500 p-2">
                        <FiEdit />
                      </button>
                      <button className="bg-transparent">
                        <AiOutlineDelete />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    className="px-3 py-4 font-normal text-gray-600 whitespace-nowrap "
                  >
                    Terrain 3
                  </th>
                  <td className="px-3 py-4">Mini Foot</td>

                  <td className="px-3 py-4">10</td>
                  <td className="px-3 py-4">10</td>
                  <td className="px-3 py-4">10</td>
                  <td className="px-3 py-4">10</td>

                  <td className="px-3 py-4 ">
                    <div className=" flex flex-row space-x-3 text-lg">
                      <button className="bg-transparent bg-gray-200 rounded-lg text-blue-500 p-2">
                        <FiEdit />
                      </button>
                      <button className="bg-transparent">
                        <AiOutlineDelete />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
};

export default ShowTerrains;
