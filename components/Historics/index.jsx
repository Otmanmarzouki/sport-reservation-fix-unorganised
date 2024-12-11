import React, { useEffect, useState } from "react";
import Calendar from "./Calendar";
import MiniCalendar from "./MiniCalendar";
import TerrainSelector from "./Selector";
import Search from "./Search";
import Legend from "./Legend";
import { fetchTerrains } from "@/services/reservation";

export default function HistoricComponent() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTerrain, setSelectedTerrain] = useState(null);
  const [terrains, setTerrains] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedTerrains = await fetchTerrains();
        setTerrains(fetchedTerrains);
        fetchAvailability(selectedDate, null);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [selectedDate]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    fetchAvailability(date, selectedTerrain);
  };

  const handleTerrainChange = (terrainId) => {
    setSelectedTerrain(terrainId);
    fetchAvailability(selectedDate, terrainId);
  };

  const fetchAvailability = async (date, terrainId) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/check-availability", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Date: date.toISOString().split("T")[0],
          terrainId: terrainId || null,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error("Error fetching availability:", error.message);
    }
  };

  return (
    <main className="flex w-full bg-gray-100 overflow-y-auto">
      <div className="flex flex-col w-full space-y-8 py-4 px-4">
        <div className="flex w-full flex-col lg:flex-row gap-6">
          <div className="flex w-full lg:w-2/3 flex-col space-y-4">
            <TerrainSelector
              terrains={terrains}
              selectedTerrain={selectedTerrain}
              onTerrainChange={handleTerrainChange}
            />
            <Calendar
              events={events}
              handleEventClick={(info) => console.log("Clicked:", info.event)}
            />
          </div>
          <div className="lg:w-1/3 w-full flex flex-col gap-8">
            <Search />
            <div className="bg-white p-4 rounded-lg">
              <MiniCalendar selectedDate={selectedDate} onDateChange={handleDateChange} />
            </div>
            <Legend />
          </div>
        </div>
      </div>
    </main>
  );
}
