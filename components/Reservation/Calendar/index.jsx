import React from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";

const Calendar = () => {
  const slotLabelFormat = {
    hour: "numeric",
    minute: "2-digit",
  };

  return (
    <FullCalendar
      plugins={[timeGridPlugin]}
      weekends={false}
      allDaySlot={false}
      locale={"fr"}
      slotLabelFormat={slotLabelFormat}
      navLinks={true}
      headerToolbar={{
        left: "prev",
        center: "title",
        right: "next",
      }}
    />
  );
};

export default Calendar;
