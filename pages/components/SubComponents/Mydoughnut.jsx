import React, { useState } from "react";

import { AgChartsReact } from "ag-charts-react";

export default function MyDoughnut() {
  function getData() {
    return [
      { asset: "Stocks", amount: 60000 },
      { asset: "Bonds", amount: 40000 },
      { asset: "Cash", amount: 7000 },
    ];
  }

  const [options, setOptions] = useState({
    data: getData(),

    series: [
      {
        type: "pie",

        angleKey: "amount",
        innerRadiusRatio: 1.1,
        innerLabels: [
          {
            text: "Chiffre D'affaire ",
            fontWeight: "normal",
          },
          {
            text: "$100,000",
            margin: 4,
            fontSize: 20,
            color: "black",
          },
        ],
        innerCircle: {
          fill: "white",
        },
      },
    ],
  });

  return (
    <div>
      <AgChartsReact options={options} />
    </div>
  );
}
