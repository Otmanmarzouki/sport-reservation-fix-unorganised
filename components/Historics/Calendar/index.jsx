import React, { useMemo } from "react";
import FullCalendar from "@fullcalendar/react";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";

export default function Calendar({ events, handleEventClick }) {
  const today = new Date().toISOString().split("T")[0];
  const workingHours = {
    start: `${today}T06:00:00`,
    end: `${today}T19:00:00`,
  };

  const resources = useMemo(() => {
    const terrainSet = new Set(events.map((event) => event.terrain_name));

    return Array.from(terrainSet).map((terrainName) => ({
      id: terrainName,
      title: terrainName,
    }));
  }, [events]);

  const calendarEvents = useMemo(() => {
    return events.flatMap((event) => {
      const { terrain_name, reservations } = event;

      if (reservations.length === 0) {
        return [
          {
            start: workingHours.start,
            end: workingHours.end,
            resourceId: terrain_name,
            title: "Créneau disponible",
            className: "Dsp-slot",
          },
        ];
      }

      const freeSlots = [];
      let lastEndTime = workingHours.start;

      for (const reservation of reservations) {
        const { DateDebut, DateFin, canceled } = reservation;

        if (canceled === 1) {
          freeSlots.push({
            start: DateDebut,
            end: DateFin,
            resourceId: terrain_name,
            title: "Créneau annulé",
            className: "canceled-slot",
          });
        }
        if (new Date(lastEndTime) < new Date(DateDebut)) {
          freeSlots.push({
            start: lastEndTime,
            end: DateDebut,
            resourceId: terrain_name,
            title: "Créneau disponible",
            className: "Dsp-slot",
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
          className: "Dsp-slot",
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
          left: "prev",
          center: "title",
          right: "next",
        }}
        slotMinTime="06:00:00"
        slotMaxTime="19:00:00"
        resourceAreaWidth="50px"
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
