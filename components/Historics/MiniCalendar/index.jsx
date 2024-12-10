import React, { useState } from "react";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function ReactDayPicker() {
  const [selectedRange, setSelectedRange] = useState();

  const monthCaptionStyle = {
    padding: "1.0em",
    fontSize: "0.9em",
  };
  return (
    <DayPicker
      mode="range"
      selected={selectedRange}
      onSelect={setSelectedRange}
      modifiers={{
        inRange: selectedRange
          ? {
              after: selectedRange.from,
              before: selectedRange.to,
            }
          : undefined,
      }}
      modifiersStyles={{
        inRange: {
          backgroundColor: "#E9ECEF",
          color: "black",
          borderRadius: "10px",
        },
        range_start: {
          backgroundColor: "#E9ECEF",
          color: "black",
          borderRadius: "10px",
        },
        range_end: {
          backgroundColor: "#E9ECEF",
          color: "black",
          borderRadius: "10px",
        },
      }}
      styles={{
        month_caption: monthCaptionStyle,
        day: { fontSize: "12px", width: "0.5rem", height: "1rem" },
        chevron: { width: "12px" },
      }}
    />
  );
}
