import React, { useMemo } from "react";
import FullCalendar from "@fullcalendar/react";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";

export default function Calendar({ events, handleEventClick }) {
  const resources = useMemo(() => {
    const terrainSet = new Set(events.map((event) => event.terrain_name));
    return Array.from(terrainSet).map((terrainName) => ({
      id: terrainName,
      title: terrainName,
    }));
  }, [events]);

  return (
    <div>
      <style>{`.fc-license-message { display: none !important; }`}</style>
      <FullCalendar
        plugins={[resourceTimeGridPlugin]}
        initialView="resourceTimeGridDay"
        slotLabelFormat={{ hour: "numeric", minute: "2-digit" }}
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
