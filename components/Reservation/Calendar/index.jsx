// Calendar.js
import React from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { renderEventContent } from "./EventRender/index";

const Calendar = ({ events, handleDateSelect }) => {
  const slotLabelFormat = {
    hour: "numeric",
    minute: "2-digit",
  };

  return (
    <FullCalendar
      plugins={[timeGridPlugin, interactionPlugin]}
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
      selectable={true}
      select={handleDateSelect}
      events={events}
      eventContent={renderEventContent}
    />
  );
};

export default Calendar;
