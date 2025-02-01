import { useState } from "react";
import { addReservation } from "@/services/reservation";

const useAddReservation = () => {
  const [error, setError] = useState(null);

  const addNewReservation = async (reservationData) => {
    try {
      return await addReservation(reservationData);
    } catch (err) {
      setError("Erreur lors de l'ajout de la réservation.");
      console.error(err);
    }
  };

  return { addNewReservation, error };
};

export default useAddReservation;
