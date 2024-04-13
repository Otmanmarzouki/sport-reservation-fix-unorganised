import React from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";

const TerrainCalendar = ({ slotLabelFormat }) => {
  return (
    <FullCalendar
      plugins={[timeGridPlugin]}
      initialView="timeGridDay"
      headerToolbar={false}
      dayHeaders={false}
      allDaySlot={false}
      dayCount={2}
      locale={"fr"}
      slotLabelFormat={slotLabelFormat}
    />
  );
};

export default TerrainCalendar;
