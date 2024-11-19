import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import CustomButton from "@/components/CustomButton/index";
import { deleteTerrain } from "@/services/terrain/index";
import Modal from "@/Commons/Modal/index";

const ShowTerrains = () => {
  const [terrains, setTerrains] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedTerrainId, setSelectedTerrainId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      await fetch("http://127.0.0.1:8000/api/terrains", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((resData) => {
          setTerrains(Array.isArray(resData) ? resData : []);
        });
    }
    fetchData();
  }, []);

  const handleDeleteSuccess = (terrainId) => {
    setTerrains((prevTerrains) => prevTerrains.filter((terrain) => terrain.id !== terrainId));
  };

  const handleEditClick = (terrainId) => {
    router.push(`/terrain/editer/${terrainId}`);
  };

  const openDeleteModal = (terrainId) => {
    setSelectedTerrainId(terrainId);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setSelectedTerrainId(null);
  };

  const confirmDelete = async () => {
    if (selectedTerrainId) {
      const success = await deleteTerrain(selectedTerrainId);
      if (success) {
        handleDeleteSuccess(selectedTerrainId);
      }
    }
    closeDeleteModal();
  };

  return (
    <>
      <main className="flex flex-col w-full bg-gray-100 overflow-y-auto px-4 space-y-8">
        <div className="flex flex-row justify-between lg:px-6 pt-8">
          <div className="mx-2">
            <h3 className="lg:text-2xl text-lg font-semibold">Terrains</h3>
          </div>
          <div className="mx-2">
            <Link href="/terrain/ajouter" passHref>
              <button className="inline-flex px-3 py-2 text-white bg-blue-500 rounded-2xl text-xs lg:text-sm">
                Ajouter un Terrain
              </button>
            </Link>
          </div>
        </div>
        <div className="flex lg:justify-center lg:px-6">
          <div className="shadow-lg w-full relative overflow-x-auto bg-white p-6 rounded-lg">
            <table className="w-full text-xs lg:text-sm text-left">
              <thead className="text-xs text-gray-500 font-thin">
                <tr>
                  <th scope="col" className="px-3 py-3">
                    Nom Terrain
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Type de terrain
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Activité
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Dimensions
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Capacité max
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Prix par heure (par personne)
                  </th>
                  <th scope="col" className="px-3 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {terrains.map((terrain, index) => (
                  <tr key={index}>
                    <th
                      scope="row"
                      className="px-3 py-4 font-normal text-gray-600 whitespace-nowrap"
                    >
                      {terrain.Nom_Terrain}
                    </th>
                    <td className="px-3 py-4">{terrain.type_Terrain}</td>
                    <td className="px-3 py-4">{terrain.activité}</td>
                    <td className="px-3 py-4">
                      {terrain.dimension1} x {terrain.dimension2} m
                    </td>
                    <td className="px-3 py-4">{terrain.Capacité}</td>
                    <td className="px-3 py-4">{terrain.prix} €</td>
                    <td className="px-1 py-4">
                      <div className="flex flex-row text-lg">
                        <CustomButton
                          className="bg-transparent bg-gray-200 rounded-lg text-blue-500 p-2"
                          icon={<FiEdit />}
                          onClick={() => handleEditClick(terrain.id)}
                        />
                        <CustomButton
                          className="bg-transparent bg-gray-200 rounded-lg text-red-500 p-2"
                          icon={<AiOutlineDelete />}
                          onClick={() => openDeleteModal(terrain.id)}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {showDeleteModal && (
            <Modal
              showModal={showDeleteModal}
              body={<p>Êtes-vous sûr de vouloir le supprimer  ?</p>}
              onClose={closeDeleteModal}
              onSave={confirmDelete}
            />
          )}
        </div>
      </main>
    </>
  );
};

export default ShowTerrains;
