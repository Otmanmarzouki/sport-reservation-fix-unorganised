import React, { useState } from "react";
import Calendar from "./Calendar";
import MiniCalendar from "./MiniCalendar";
import TerrainSelector from "./Selector";

const HistoricComponent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTerrain, setSelectedTerrain] = useState("");
  const [terrains] = useState([
    { id: "terrain1", title: "Terrain 1" },
    { id: "terrain2", title: "Terrain 2" },
    { id: "terrain3", title: "Terrain 3" },
  ]);

  const [events] = useState([
    {
      id: "1",
      title: "Créneau Disponible",
      start: "2024-11-19T07:00:00",
      end: "2024-11-19T08:00:00",
      resourceId: "terrain1",
      color: "#FFC0CB",
    },
    {
      id: "2",
      title: "Créneau Annulé",
      start: "2024-11-19T11:00:00",
      end: "2024-11-19T12:00:00",
      resourceId: "terrain2",
      color: "#87CEEB",
    },
    {
      id: "3",
      title: "Joueur 1 - Non Payée",
      start: "2024-11-19T15:00:00",
      end: "2024-11-19T16:00:00",
      resourceId: "terrain3",
      color: "#90EE90",
    },
  ]);

  const filteredEvents = selectedTerrain
    ? events.filter((event) => event.resourceId === selectedTerrain)
    : events;

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log("Selected date:", date);
  };

  const handleTerrainChange = (terrainId) => {
    setSelectedTerrain(terrainId);
  };

  const handleEventClick = (clickInfo) => {
    console.log("Clicked event:", clickInfo.event);
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
            <Calendar events={filteredEvents} handleEventClick={handleEventClick} />
          </div>
          <div className="lg:w-1/3 w-full ">
            <div className="bg-white p-4  rounded-lg ">
              <MiniCalendar selectedDate={selectedDate} onDateChange={handleDateChange} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HistoricComponent;
