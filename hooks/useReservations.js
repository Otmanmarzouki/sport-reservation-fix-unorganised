// hooks/useReservations.js
import { useState, useEffect } from "react";
import { fetchReservations } from "@/services/reservation";

const useReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const fetchedReservations = await fetchReservations();
        setReservations(Array.isArray(fetchedReservations) ? fetchedReservations : []);
      } catch (error) {
        setErrorMessage("Failed to fetch reservations. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { reservations, loading, errorMessage };
};

export default useReservations;
