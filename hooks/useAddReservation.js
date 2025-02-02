import { useState } from "react";
import { addReservation } from "@/services/reservation";

const useAddReservation = () => {
  const [formData, setFormData] = useState({ Prenom: "", Nom: "", Email: "", Tel: "", Sexe: "" });
  const [selectedDateRange, setSelectedDateRange] = useState({ startDate: "", endDate: "" });
  const [pendingReservation, setPendingReservation] = useState(null);
  const [error, setError] = useState(null);

  const addNewReservation = async (activité) => {
    if (!formData.Prenom || !formData.Nom || !formData.Email || !formData.Tel) {
      setError("Veuillez remplir tous les champs");
      return;
    }

    if (!selectedDateRange.startDate || !selectedDateRange.endDate) {
      setError("Veuillez sélectionner une plage de dates.");
      return;
    }
    const newReservation = {
      ...formData,
      activité: activité,
      DateDebut: selectedDateRange.startDate,
      DateFin: selectedDateRange.endDate,
    };

    try {
      const savedReservation = await addReservation(newReservation);
      setPendingReservation(savedReservation);
      setFormData({ Prenom: "", Nom: "", Email: "", Tel: "", Sexe: "" });
      setSelectedDateRange({ startDate: "", endDate: "" });
      setError("");
      return savedReservation;
    } catch (err) {
      setError("Erreur lors de l'ajout de la réservation.");
      console.error(err);
    }
  };

  return {
    formData,
    setFormData,
    setSelectedDateRange,
    addNewReservation,
    error,
    setError,
    pendingReservation,
  };
};

export default useAddReservation;
