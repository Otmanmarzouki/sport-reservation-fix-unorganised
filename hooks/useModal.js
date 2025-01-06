import { useState } from "react";

const useModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");

  const modal = (type) => {
    setShowModal(true);
    setModalType(type);
  };
  const closeModal = () => {
    setShowModal(false);
    setModalType("");
  };
  return { showModal, modal, closeModal, modalType };
};
