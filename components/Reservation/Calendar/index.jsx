// Calendar.js
import React from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { renderEventContent } from "./EventRender/index";

const Calendar = ({ events, handleDateSelect, handleEventClick }) => {
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
      slotMinTime="06:00:00"
      slotMaxTime="19:00:00"
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
      eventClick={handleEventClick}
    />
  );
};

export default Calendar;
