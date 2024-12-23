import React, { useEffect, useState } from "react";
import Calendar from "./Calendar";
import MiniCalendar from "./MiniCalendar";
import TerrainSelector from "./Selector";
import Search from "./Search";
import Legend from "./Legend";

export default function HistoricComponent() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTerrain, setSelectedTerrain] = useState(null);
  const [terrains, setTerrains] = useState([]);
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchAvailability(selectedTerrain);
  }, [selectedDate, selectedTerrain]);

  const handleDateChange = (date) => setSelectedDate(date);

  const handleTerrainChange = (terrainId) => setSelectedTerrain(terrainId);

  const fetchAvailability = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:8000/api/check-availability", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          terrain_id: selectedTerrain,
        }),
      });

      if (!response.ok) throw new Error(`Error: ${response.statusText}`);
      const data = await response.json();
      if (selectedTerrain) {
        setEvents([data]);
      } else {
        setEvents(data);
      }

      setTerrains(Array.isArray(data) ? data : [data]);
    } catch (error) {
      console.error("Error fetching availability:", error.message);
    } finally {
      setIsLoading(false);
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
            {isLoading ? (
              <div className="text-center text-gray-500">Loading Calendar...</div>
            ) : (
              <Calendar
                events={events}
                handleEventClick={(info) => console.log("Clicked:", info.event)}
              />
            )}
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
