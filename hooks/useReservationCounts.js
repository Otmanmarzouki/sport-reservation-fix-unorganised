import { useEffect, useState } from "react";
import { getCount } from "@/services/home";

export function useReservationCounts() {
  const [counts, setCounts] = useState({ draftCount: 0, reservationCount: 0, newClients: 0 });

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const drafts = await getCount("drafts");
        const reservations = await getCount("reservations");
        const newClients = await getCount("newClients");
        setCounts({
          draftCount: drafts.Count || 0,
          reservationCount: reservations.Count || 0,
          newClients: newClients.Count || 0,
        });
      } catch (error) {
        console.error("Error fetching reservation counts:", error);
      }
    };
    fetchCounts();
  }, []);
  return { counts };
}
