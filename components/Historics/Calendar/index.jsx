import React, { useMemo, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";

export default function Calendar({ events, handleEventClick }) {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);

  const workingHours = useMemo(
    () => ({
      start: new Date(`${selectedDate}T06:00:00`),
      end: new Date(`${selectedDate}T19:00:00`),
    }),
    [selectedDate],
  );

  const resources = useMemo(() => {
    const terrainSet = new Set(events.map((event) => event.terrain_name));

    return Array.from(terrainSet).map((terrainName) => ({
      id: terrainName,
      title: terrainName,
    }));
  }, [events]);

  const calendarEvents = useMemo(() => {
    return events.flatMap(({ terrain_name, reservations }) => {
      let lastEndTime = workingHours.start;
      const slots = [];

      // Sort reservations by start time
      const sortedReservations = [...reservations].sort(
        (a, b) => new Date(a.DateDebut) - new Date(b.DateDebut),
      );

      sortedReservations.forEach(({ DateDebut, DateFin, canceled }) => {
        const start = new Date(DateDebut);
        const end = new Date(DateFin);

        // Add available slot before the reservation
        if (lastEndTime < start) {
          slots.push({
            start: lastEndTime.toISOString(),
            end: start.toISOString(),
            resourceId: terrain_name,
            title: "Créneau disponible",
            className: "Dsp-slot",
          });
        }

        // Add canceled slot if applicable
        if (canceled) {
          slots.push({
            start: start.toISOString(),
            end: end.toISOString(),
            resourceId: terrain_name,
            title: "Créneau annulé",
            className: "canceled-slot",
          });
        }

        lastEndTime = end;
      });

      // Add final available slot if time remains
      if (lastEndTime < workingHours.end) {
        slots.push({
          start: lastEndTime.toISOString(),
          end: workingHours.end.toISOString(),
          resourceId: terrain_name,
          title: "Créneau disponible",
          className: "Dsp-slot",
        });
      }

      return slots;
    });
  }, [events, workingHours]);

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
          left: "prev",
          center: "title",
          right: "next",
        }}
        slotMinTime="06:00:00"
        slotMaxTime="19:00:00"
        resourceAreaWidth="50px"
        eventOverlap={false}
        eventContent={(arg) => {
          const borderColorClass =
            arg.event.title === "Créneau disponible"
              ? "bg-orange-500"
              : arg.event.title === "Créneau annulé"
                ? "bg-blue-600"
                : "";
          return (
            <div className="flex flex-row h-full text-black gap-1">
              <div className={`${borderColorClass} w-1`}></div>
              <span>{arg.event.title}</span>
            </div>
          );
        }}
      />
    </div>
  );
}
