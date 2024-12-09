import React from "react";
import FullCalendar from "@fullcalendar/react";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";

export default function Calendar({ events, handleDateSelect, handleEventClick }) {
  const slotLabelFormat = {
    hour: "numeric",
    minute: "2-digit",
  };
  const resources = [
    { id: "terrain1", title: "Terrain 1" },
    { id: "terrain2", title: "Terrain 2" },
    { id: "terrain3", title: "Terrain 3" },
  ];

  return (
    <div>
      <style>{`.fc-license-message { display: none !important; }`}</style>
      <FullCalendar
        plugins={[resourceTimeGridPlugin]}
        initialView="resourceTimeGridDay"
        slotLabelFormat={slotLabelFormat}
        resources={resources}
        events={events}
        allDaySlot={false}
        headerToolbar={{
          left: "",
          center: "title",
          right: "",
        }}
        slotMinTime="07:00:00"
        slotMaxTime="19:00:00"
        resourceAreaWidth="150px"
        resourceAreaHeaderContent="Terrains"
        selectable={true}
        select={handleDateSelect}
        eventClick={handleEventClick}
        eventContent={(arg) => (
          <div className="flex flex-col items-center">
            <span>{arg.event.title}</span>
          </div>
        )}
      />
    </div>
  );
}
