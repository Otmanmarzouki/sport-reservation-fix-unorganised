import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({ dataValue }) => {
  const data = {
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        data: [dataValue, 3000 - dataValue], // Example values, you can adjust accordingly
        backgroundColor: ["#FF7F0E", "#1F77B4"], // Orange and blue colors
        hoverBackgroundColor: ["#FF9F40", "#3A9BD9"], // Slightly lighter colors on hover
        borderWidth: 0, // To make a smooth doughnut without borders
      },
    ],
  };

  const options = {
    cutout: "70%", // Adjusts the thickness of the chart
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: false, // Disable the tooltip
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
