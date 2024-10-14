import { useState, useEffect } from "react";

const useSportsData = () => {
  const [sportsData, setSportsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClientCounts = async () => {
      const sportsList = ["Paddle", "Tennis", "Mini Foot"];
      const sportsData = [];
      try {
        for (let sport of sportsList) {
          const response = await fetch("http://127.0.0.1:8000/api/clients-count-by-sport", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ activité: sport }),
          });
          const data = await response.json();
          sportsData.push({
            name: sport,
            count: data.client_count || 0,
            color:
              sport === "Paddle"
                ? "bg-blue-800"
                : sport === "Tennis"
                  ? "bg-orange-500"
                  : "bg-blue-300",
          });
        }
        setSportsData(sportsData);
      } catch (error) {
        console.error("Error fetching client counts:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchClientCounts();
  }, []);
  return { sportsData, loading, error };
};

export default useSportsData;
