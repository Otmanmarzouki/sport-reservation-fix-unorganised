import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { deleteTerrain } from "@/services/terrain/index";

const DeleteButton = ({ terrainId, onDeleteSuccess }) => {
  const handleDelete = async () => {
    const confirmDelete = window.confirm("Êtes-vous sûr de vouloir supprimer ce terrain?");
    if (!confirmDelete) return;

    const success = await deleteTerrain(terrainId);

    if (success && onDeleteSuccess) {
      onDeleteSuccess(terrainId);
    }
  };

  return (
    <button
      className="bg-transparent bg-gray-200 rounded-lg text-red-500 p-2"
      onClick={handleDelete}
    >
      <AiOutlineDelete />
    </button>
  );
};
export default DeleteButton;
