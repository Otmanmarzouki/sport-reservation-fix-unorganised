import React from "react";

import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
const ActionButtons = ({ onEdit, onDelete }) => {
  return (
    <div className="flex flex-row mx-2 space-x-2 lg:space-x-2">
      <button className="bg-transparent bg-gray-200 text-blue-500 text-sm" onClick={onEdit}>
        <FiEdit />
      </button>
      <button className="bg-transparent text-sm text-blue-500" onClick={onDelete}>
        <AiOutlineDelete />
      </button>
    </div>
  );
};
export default ActionButtons;
