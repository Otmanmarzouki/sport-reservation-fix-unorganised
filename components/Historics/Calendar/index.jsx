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

  const calendarEvents = useMemo(() => {
    const workingHours = { start: "2024-12-13T07:00:00", end: "2024-12-13T19:00:00" };

    return events.flatMap((event) => {
      const { terrain_name, reservations } = event;
      if (reservations.length === 0) {
        return [
          {
            start: workingHours.start,
            end: workingHours.end,
            resourceId: terrain_name,
            title: "Créneau disponible",
            className: "bg-orange-100 text-black",
          },
        ];
      }

      const freeSlots = [];
      let lastEndTime = workingHours.start;
      for (const reservation of reservations) {
        const { DateDebut, DateFin } = reservation;
        if (new Date(lastEndTime) < new Date(DateDebut)) {
          freeSlots.push({
            start: lastEndTime,
            end: DateDebut,
            resourceId: terrain_name,
            title: "Créneau disponible",
            className: "bg-orange-100 text-black",
          });
        }
        lastEndTime = DateFin;
      }

      if (new Date(lastEndTime) < new Date(workingHours.end)) {
        freeSlots.push({
          start: lastEndTime,
          end: workingHours.end,
          resourceId: terrain_name,
          title: "Créneau disponible",
          className: "bg-orange-100 text-black",
        });
      }

      return freeSlots;
    });
  }, [events]);

  return (
    <div>
      <style>{`
        .fc-license-message { display: none !important; }
        .dot {
          height: 10px;
          width: 10px;
          border-radius: 50%;
          margin-right: 8px;
        }
      `}</style>
      <FullCalendar
        plugins={[resourceTimeGridPlugin]}
        initialView="resourceTimeGridDay"
        slotLabelFormat={{ hour: "numeric", minute: "2-digit" }}
        resources={resources}
        events={calendarEvents}
        allDaySlot={false}
        headerToolbar={{
          left: "",
          center: "title",
          right: "",
        }}
        slotMinTime="07:00:00"
        slotMaxTime="19:00:00"
        resourceAreaWidth="150px"
        resourceAreaHeaderContent={(arg) => (
          <div dangerouslySetInnerHTML={{ __html: arg.resource.title }} />
        )}
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
