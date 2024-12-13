// hooks/useReservations.js
import { useState, useEffect } from "react";
import { fetchTerrains } from "@/services/terrain";

const useTerrains = () => {
  const [terrains, setTerrains] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const fetchedTerrains = await fetchTerrains();
        console.log("test", fetchedTerrains);
        setTerrains(fetchedTerrains);
      } catch (error) {
        setErrorMessage("Failed to fetch reservations. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { terrains, loading, errorMessage };
};

export default useTerrains;
