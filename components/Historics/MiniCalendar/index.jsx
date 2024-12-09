import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function ReactDayPicker() {
  const [selected, setSelected] = React.useState();

  const monthCaptionStyle = {
    padding: "1.0em",
  };
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      styles={{
        month_caption: monthCaptionStyle,
      }}
    />
  );
}
