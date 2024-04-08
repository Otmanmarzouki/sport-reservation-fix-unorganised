import React, { useState } from "react";

import { AgChartsReact } from "ag-charts-react";

export default function MylineHomeChart() {
  function getLoungeData() {
    return [
      {
        time: "7:00",
        reservation: 5,
      },
      {
        time: "8:00",
        reservation: 7,
      },

      {
        time: "9:00",
        reservation: 10,
      },
      {
        time: "10:00",
        reservation: 20,
      },
      {
        time: "11:00",
        reservation: 30,
      },
      {
        time: "12:00",
        reservation: 30,
      },
      {
        time: "13:00",
        reservation: 30,
      },
      {
        time: "14:00",
        reservation: 30,
      },
      {
        time: "15:00",
        reservation: 40,
      },
      {
        time: "16:00",
        reservation: 20,
      },
      {
        time: "17:00",
        reservation: 30,
      },
      {
        time: "18:00",
        reservation: 45,
      },
      {
        time: "19:00",
        reservation: 45,
      },
      {
        time: "20:00",
        reservation: 45,
      },
      {
        time: "21:00",
        reservation: 45,
      },
      {
        time: "22:00",
        reservation: 45,
      },
    ];
  }

  function getOfficeData() {
    return [
      {
        time: "7:00",
        reservation: 5,
      },
      {
        time: "8:00",
        reservation: 20,
      },

      {
        time: "9:00",
        reservation: 23,
      },
      {
        time: "10:00",
        reservation: 30,
      },
      {
        time: "11:00",
        reservation: 45,
      },
      {
        time: "12:00",
        reservation: 45,
      },
      {
        time: "13:00",
        reservation: 45,
      },
      {
        time: "14:00",
        reservation: 45,
      },
      {
        time: "15:00",
        reservation: 45,
      },
      {
        time: "16:00",
        reservation: 45,
      },
      {
        time: "17:00",
        reservation: 45,
      },
      {
        time: "18:00",
        reservation: 45,
      },
      {
        time: "19:00",
        reservation: 30,
      },
      {
        time: "20:00",
        reservation: 20,
      },
      {
        time: "21:00",
        reservation: 10,
      },
      {
        time: "22:00",
        reservation: 45,
      },
    ];
  }
  const [options, setOptions] = useState({
    title: {
      text: "Reservation",
    },
    series: [
      {
        data: getLoungeData(),
        xKey: "time",
        yKey: "reservation",
        yName: "Lounge",
      },
      {
        data: getOfficeData(),
        xKey: "time",
        yKey: "reservation",
        yName: "Office",
      },
    ],
    axes: [
      {
        type: "String",
        position: "bottom",
      },
      {
        type: "number",
        position: "left",
      },
    ],
  });

  return (
    <>
      <AgChartsReact options={options} />
    </>
  );
}
