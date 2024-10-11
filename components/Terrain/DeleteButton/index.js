import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { deleteTerrain } from "@/services/terrain/index";
import Modal from "@/components/Terrain/Modal/index";

const DeleteButton = ({ terrainId, onDeleteSuccess }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleDelete = async () => {
    const success = await deleteTerrain(terrainId);

    if (success && onDeleteSuccess) {
      onDeleteSuccess(terrainId);
    }
    closeModal();
  };

  return (
    <>
      <button
        className="bg-transparent bg-gray-200 rounded-lg text-red-500 p-2"
        onClick={openModal}
      >
        <AiOutlineDelete />
      </button>

      <Modal
        showModal={showModal}
        body={<p>Êtes-vous sûr de vouloir le supprimer  ?</p>}
        onClose={closeModal}
        onSave={handleDelete}
      />
    </>
  );
};

export default DeleteButton;
