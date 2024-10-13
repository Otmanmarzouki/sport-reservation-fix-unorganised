import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const SportPieChart = () => {
  const data = {
    labels: ["Paddle", "Tennis", "Foot"],
    datasets: [
      {
        label: "Nombre de clients",
        data: [90, 50, 100],
        backgroundColor: ["#1E3A8A", "#F97316", "#60A5FA"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default SportPieChart;
