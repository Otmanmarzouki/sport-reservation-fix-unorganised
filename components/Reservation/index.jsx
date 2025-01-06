import React, { useEffect, useState } from "react";
import useReservations from "@/hooks/useReservationActions";
import useTerrains from "@/hooks/useTerrains";

import {
  addReservation,
  updateReservationStatus,
  cancelReservation,
} from "@/services/reservation/index";
import Calendar from "./Calendar";
import { FaUserCircle } from "react-icons/fa";
import Modal from "../../Commons/Modal/index";
import TerrainSelector from "@/components/Reservation/Selector";

const getRandomColor = () => {
  const colors = ["#FFDDC1", "#C1FFD7", "#D1C1FF", "#FFC1C1", "#FFF0C1"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const ReservationComponent = () => {
  const { reservations } = useReservations();
  const { terrains, selectedTerrain, handleTerrainChange } = useTerrains();
  const [filteredReservations, setFilteredReservations] = useState([]);

  const [selectedDateRange, setSelectedDateRange] = useState({
    startDate: "",
    endDate: "",
  });
  const [form, setForm] = useState({
    Prenom: "",
    Nom: "",
    Email: "",
    Tel: "",
    Sexe: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [pendingReservation, setPendingReservation] = useState(null);
  const [selectedReservationId, setSelectedReservationId] = useState(null);

  useEffect(() => {
    if (selectedTerrain) {
      const filtered = reservations.filter((res) => res.terrain.activité === selectedTerrain);
      setFilteredReservations(filtered);
    } else {
      setFilteredReservations(reservations);
    }
  }, [selectedTerrain, reservations]);

  const UpdateData = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateSelect = (selectInfo) => {
    const { start, end } = selectInfo;
    setSelectedDateRange({
      startDate: start,
      endDate: end,
    });
  };

  const events = filteredReservations.map((res) => ({
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
  }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedDateRange.startDate || !selectedDateRange.endDate) {
      setErrorMessage("Please select a date range.");
      return;
    }

    const formData = {
      ...form,
      selectedTerrain,
      DateDebut: selectedDateRange.startDate,
      DateFin: selectedDateRange.endDate,
    };

    try {
      const savedReservation = await addReservation(formData);
      setPendingReservation(savedReservation);
      setModalType("confirm");
      setShowModal(true);
      setForm({
        Prenom: "",
        Nom: "",
        Email: "",
        Tel: "",
        Sexe: "",
      });
      setSelectedDateRange({ startDate: "", endDate: "" });
    } catch (error) {}
  };
  const handleConfirmDraft = async () => {
    if (!pendingReservation) {
      setErrorMessage("No pending reservation to confirm.");
      return;
    }

    try {
      await updateReservationStatus(pendingReservation.reservation.id);
      setShowModal(false);
      setPendingReservation(null);
    } catch (error) {
      setErrorMessage("Error confirming reservation:");
    } finally {
    }
  };

  const handleEventClick = (eventInfo) => {
    const reservationId = eventInfo.event.extendedProps.id;
    setSelectedReservationId(reservationId);
    setModalType("delete");
    setShowModal(true);
  };

  const handleConfirmCancel = async () => {
    if (!selectedReservationId) {
      setErrorMessage("No reservation selected for cancellation.");
      return;
    }

    try {
      await cancelReservation(selectedReservationId);
      setShowModal(false);
      setSelectedReservationId(null);
      const updatedReservations = await fetchReservations();
      setReservations(updatedReservations);
    } catch (error) {
      console.error("Error cancelling reservation:", error);
    } finally {
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
            <div className="flex lg:flex-row flex-col w-full lg:justify-evenly">
              <TerrainSelector
                terrains={terrains}
                selectedTerrain={selectedTerrain}
                handleTerrainChange={handleTerrainChange}
              />
            </div>

            <Calendar
              events={events}
              handleDateSelect={handleDateSelect}
              handleEventClick={handleEventClick}
            />
          </div>
          <div className="flex flex-col w-full lg:w-1/3 ">
            <form
              className="flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={handleSubmit}
            >
              <div className="flex mb-4 text-lg font-semibold">
                <h3>Informations personnelles</h3>
              </div>
              {["Prenom", "Nom", "Tel", "Email"].map((field) => (
                <div className="flex justify-center mb-4" key={field}>
                  <input
                    className="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name={field}
                    type={field === "Email" ? "email" : "text"}
                    placeholder={field === "Tel" ? "Téléphone" : field}
                    onChange={UpdateData}
                    value={form[field]}
                  />
                </div>
              ))}
              <div className="flex mb-4">
                <select
                  className="shadow w-full appearance-none border rounded py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  name="Sexe"
                  value={form.Sexe}
                  onChange={UpdateData}
                >
                  <option value="">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="flex mb-4 text-lg font-semibold">
                <h3>Détails sport</h3>
              </div>
              <div className="flex mb-4">
                <input
                  className="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="details"
                  type="text"
                  placeholder="Détails"
                />
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white px-8 py-2 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Procéder
                </button>
              </div>
            </form>
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
