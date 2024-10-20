import React from "react";

const Modal = ({ showModal, body, onClose, onSave }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex w-full items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-4 max-w-sm w-full">
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
