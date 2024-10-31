import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({ dataValue }) => {
  const data = {
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        data: [dataValue, 3000 - dataValue],
        backgroundColor: ["#FF7F0E", "#1F77B4"],
        hoverBackgroundColor: ["#FF9F40", "#3A9BD9"],

        borderWidth: [20, 5],
        borderColor: ["#FF7F0E", "#1F77B4"],
      },
    ],
  };

  const options = {
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div className="relative">
      <Doughnut data={data} options={options} />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-center text-gray-600 font-semibold text-xl">{dataValue} DH</p>
      </div>
    </div>
  );
};

export default DoughnutChart;
