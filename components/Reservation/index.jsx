import React, { useEffect, useState } from "react";
import useGetReservations from "@/hooks/useGetReservation";
import useTerrains from "@/hooks/useTerrains";
import useAddReservation from "@/hooks/useAddReservation";
import { updateReservation } from "@/services/reservation/index";
import Calendar from "./Calendar";
import { FaUserCircle } from "react-icons/fa";
import Modal from "../../Commons/Modal/index";
import TerrainSelector from "@/Commons/Selector";
import ReservationForm from "@/components/Reservation/Form";

const getRandomColor = () => {
  const colors = ["#FFDDC1", "#C1FFD7", "#D1C1FF", "#FFC1C1", "#FFF0C1"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const ReservationComponent = () => {
  const { reservations, setReservations } = useGetReservations();
  const { terrains, terrainId, handleTerrainChange } = useTerrains();
  const {
    pendingReservation,
    addNewReservation,
    error: addError,
    setError: setAddError,
    formData,
    setFormData,
    selectedDateRange,
    setSelectedDateRange,
  } = useAddReservation();
  const [filteredReservations, setFilteredReservations] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");

  const [selectedReservationId, setSelectedReservationId] = useState(null);

  useEffect(() => {
    if (!terrainId) {
      setFilteredReservations(reservations);
    } else {
      setFilteredReservations(reservations.filter((res) => res.terrain.id === terrainId));
    }
  }, [terrainId, reservations]);

  const handleDateSelect = ({ start, end }) => {
    setSelectedDateRange({ startDate: start, endDate: end });
  };

  const handleFormSubmit = async () => {
    const { startDate, endDate } = selectedDateRange;
    const newStart = new Date(startDate);
    const newEnd = new Date(endDate);
    const hasConflict = reservations
      .filter((res) => res.terrain.id === terrainId)
      .some((res) => {
        const resStart = new Date(res.DateDebut);
        const resEnd = new Date(res.DateFin);
        return (
          (resStart <= newStart && newStart <= resEnd) ||
          (resStart <= newEnd && newEnd <= resEnd) ||
          (newStart <= resStart && resStart <= newEnd)
        );
      });
    if (hasConflict) {
      setAddError("You have a conflict with an existing reservation");
      return;
    }

    const savedReservation = await addNewReservation(terrainId);
    if (savedReservation) {
      setShowModal(true);
      setModalType("confirm");
    }
  };

  const handleConfirmDraft = async () => {
    if (!pendingReservation) {
      setAddError("Aucune réservation en attente à confirmer.");
      return;
    }

    try {
      await updateReservation(pendingReservation.reservation.id, "drafts");
      setShowModal(false);
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
  };

  return (
    <main className="flex w-full bg-gray-100 overflow-y-auto">
      <div className="flex flex-col w-full space-y-8 py-4 px-4">
        <div className="flex w-full flex-col lg:flex-row gap-6">
          <div className="flex w-full lg:w-2/3 flex-col space-y-4">
            <div className="flex flex-row justify-around">
              <TerrainSelector
                terrains={terrains}
                selectedTerrain={terrainId}
                handleTerrainChange={handleTerrainChange}
              />
              <div>
                <select
                  id="paymentStatus"
                  name="paymentStatus"
                  className="shadow w-full  border rounded py-2 px-3 text-gray-700 leading-tight  focus:shadow-outline"
                >
                  <option value="tout">payées et le reste</option>
                  <option value="payé">payées</option>
                  <option value="partiellement-payé">Partiellement payé</option>
                </select>
              </div>
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
            {addError && <p className="text-red-500 text-center">{addError}</p>}
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
