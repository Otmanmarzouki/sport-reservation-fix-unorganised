import React from "react";

const Modal = ({ showModal, body, onClose, onSave }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-25" onClick={onClose} />

      {/* Modal Content */}
      <div
        className="relative flex flex-col gap-2 bg-white p-6 rounded-lg shadow-lg z-50"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-center my-4 text-xs ">{body}</div>
        <div className="flex w-full justify-end space-x-4">
          <button className="bg-blue-500 text-xs w-1/2 text-white p-2 rounded" onClick={onSave}>
            Oui
          </button>
          <button
            className="bg-white text-xs w-1/2 text-blue-500 border border-blue-700 p-2 rounded"
            onClick={onClose}
          >
            Non
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
