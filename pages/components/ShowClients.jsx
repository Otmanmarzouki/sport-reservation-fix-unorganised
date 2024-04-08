import React from "react";

import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete, AiOutlineSearch } from "react-icons/ai";

const ShowClients = () => {
  return (
    <>
      <main className="flex flex-col w-full bg-gray-100 overflow-y-auto  px-2 lg:px-4 space-y-8">
        <div className="flex flex-row justify-between lg:px-6 pt-8">
          <div className=" flex flex-row mx-2">
            <button className=" bg-white text-blue-500 p-1 lg:p-2 rounded-l-md ">
              <AiOutlineSearch />
            </button>
            <input
              type="text"
              name="search"
              className=" w-28 lg:w-96 rounded-r-md bg-white text-xs outline-none "
              placeholder="Rechercher Joueur"
            />
          </div>

          <div className=" flex flex-row mx-2   space-x-2 lg:space-x-2">
            <button className="bg-transparent bg-gray-200  text-blue-500  text-sm">
              <FiEdit />
            </button>
            <button className="bg-transparent text-sm text-blue-500">
              <AiOutlineDelete />
            </button>
          </div>
        </div>
        <div className="flex  lg:justify-center lg:px-6">
          <div className=" shadow-lg w-full relative overflow-x-auto bg-white   rounded-lg">
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
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
};

export default ShowClients;
