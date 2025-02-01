import React, { useEffect, useState } from "react";
import useReservations from "@/hooks/useReservationActions";
import useTerrains from "@/hooks/useTerrains";
import { addReservation, updateReservation } from "@/services/reservation/index";
import Calendar from "./Calendar";
import { FaUserCircle } from "react-icons/fa";
import Modal from "../../Commons/Modal/index";
import TerrainSelector from "@/components/Reservation/Selector";
import ReservationForm from "@/components/Reservation/Form";

const getRandomColor = () => {
  const colors = ["#FFDDC1", "#C1FFD7", "#D1C1FF", "#FFC1C1", "#FFF0C1"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const ReservationComponent = () => {
  const { reservations, setReservations } = useReservations();
  const { terrains, activité, handleTerrainChange } = useTerrains();

  const [filteredReservations, setFilteredReservations] = useState([]);
  const [selectedDateRange, setSelectedDateRange] = useState({ startDate: "", endDate: "" });
  const [formData, setFormData] = useState({ Prenom: "", Nom: "", Email: "", Tel: "", Sexe: "" });
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [pendingReservation, setPendingReservation] = useState(null);
  const [selectedReservationId, setSelectedReservationId] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setFilteredReservations(
      activité ? reservations.filter((res) => res.terrain.activité === activité) : reservations,
    );
  }, [activité, reservations]);

  const handleDateSelect = ({ start, end }) => {
    setSelectedDateRange({ startDate: start, endDate: end });
  };

  const handleFormSubmit = async () => {
    if (!selectedDateRange.startDate || !selectedDateRange.endDate) {
      setErrorMessage("Veuillez sélectionner une plage de dates.");
      return;
    }

    const newReservationData = {
      ...formData,
      activité,
      DateDebut: selectedDateRange.startDate,
      DateFin: selectedDateRange.endDate,
    };

    try {
      const savedReservation = await addReservation(newReservationData);
      setPendingReservation(savedReservation);
      setModalType("confirm");
      setShowModal(true);
      setSelectedDateRange({ startDate: "", endDate: "" });
    } catch (error) {
      console.error("Erreur lors de l'ajout de la réservation:", error);
    }
  };

  const handleConfirmDraft = async () => {
    if (!pendingReservation) {
      setErrorMessage("Aucune réservation en attente à confirmer.");
      return;
    }

    try {
      await updateReservation(pendingReservation.reservation.id, "drafts");
      setShowModal(false);
      setPendingReservation(null);
    } catch (error) {
      console.error("Erreur lors de la confirmation de la réservation:", error);
    }
  };

  const handleEventClick = (eventInfo) => {
    setSelectedReservationId(eventInfo.event.extendedProps.id);
    setModalType("delete");
    setShowModal(true);
  };

  const handleConfirmCancel = async () => {
    if (!selectedReservationId) {
      setErrorMessage("Aucune réservation sélectionnée pour l'annulation.");
      return;
    }

    try {
      await updateReservation(selectedReservationId, "canceled");
      setShowModal(false);
      setSelectedReservationId(null);
      setReservations((prev) => prev.filter((res) => res.id !== selectedReservationId));
    } catch (error) {
      console.error("Erreur lors de l'annulation de la réservation:", error);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    setPendingReservation(null);
  };

  return (
    <main className="flex w-full bg-gray-100 overflow-y-auto">
      <div className="flex flex-col w-full space-y-8 py-4 px-4">
        <div className="flex w-full flex-col lg:flex-row gap-6">
          <div className="flex w-full lg:w-2/3 flex-col space-y-4">
            <div className="flex flex-row justify-between">
              <TerrainSelector
                terrains={terrains}
                selectedTerrain={activité}
                handleTerrainChange={handleTerrainChange}
              />
              <TerrainSelector
                terrains={terrains}
                selectedTerrain={activité}
                handleTerrainChange={handleTerrainChange}
              />
            </div>

            <Calendar
              events={filteredReservations.map((res) => ({
                title: res.terrain.activité,
                start: res.DateDebut,
                end: res.DateFin,
                backgroundColor: res.color || getRandomColor(),
                extendedProps: {
                  activité: res.terrain.activité,
                  startTime: new Date(res.DateDebut).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  }),
                  endTime: new Date(res.DateFin).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  }),
                  player: "Joueurs",
                  icon: <FaUserCircle className="text-gray-600" />,
                  id: res.id,
                },
              }))}
              handleDateSelect={handleDateSelect}
              handleEventClick={handleEventClick}
            />
            {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
          </div>
          <div className="flex flex-col w-full lg:w-1/3">
            <ReservationForm
              formData={formData}
              setFormData={setFormData}
              onSubmit={handleFormSubmit}
            />
          </div>
        </div>
      </div>
      {showModal && (
        <Modal
          showModal={showModal}
          body={
            modalType === "confirm"
              ? "Voulez-vous confirmer cette réservation ?"
              : "Voulez-vous annuler cette réservation ?"
          }
          onClose={handleModalClose}
          onSave={modalType === "confirm" ? handleConfirmDraft : handleConfirmCancel}
        />
      )}
    </main>
  );
};

export default ReservationComponent;
