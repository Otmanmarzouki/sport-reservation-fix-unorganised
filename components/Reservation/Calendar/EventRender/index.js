import React from "react";
import { FaUser } from "react-icons/fa"; // Import user icon

export const renderEventContent = (eventInfo) => {
  return (
    <div
      style={{
        backgroundColor: eventInfo.event.backgroundColor,
        padding: "5px",
        borderRadius: "5px",
        color: "#000",
      }}
    >
      <div className="flex justify-between">
        <span className="text-xs font-bold">{eventInfo.event.extendedProps.player}</span>
        {eventInfo.event.extendedProps.icon}
      </div>
      <div className="text-xs">
        <span>
          {eventInfo.event.extendedProps.startTime} - {eventInfo.event.extendedProps.endTime}
        </span>
      </div>
      <div style={{ marginTop: "5px", fontSize: "14px", fontWeight: "bold" }}>
        <span className="text-xs font-bold">{eventInfo.event.extendedProps.activité}</span>
      </div>
    </div>
  );
};
