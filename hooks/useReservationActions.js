import { useState, useEffect } from "react";
import { fetchReservations } from "@/services/reservation";

const useReservations = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedReservations = await fetchReservations();
        setReservations(Array.isArray(fetchedReservations) ? fetchedReservations : []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return { reservations, setReservations };
};

export default useReservations;
