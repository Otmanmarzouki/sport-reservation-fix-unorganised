import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const SportPieChart = ({ sportsData }) => {
  const labels = sportsData.map((sport) => sport.name);
  const dataValues = sportsData.map((sport) => sport.count);
  const backgroundColors = sportsData.map((sport) =>
    sport.color === "bg-blue-800"
      ? "#1E3A8A"
      : sport.color === "bg-orange-500"
        ? "#F97316"
        : "#60A5FA",
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Nombre de clients",
        data: dataValues,
        backgroundColor: backgroundColors,
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const dataset = tooltipItem.dataset;
            const currentValue = dataset.data[tooltipItem.dataIndex];
            const total = dataset.data.reduce((acc, value) => acc + value, 0);
            const percentage = ((currentValue / total) * 100).toFixed(1);
            return `● ${percentage}%`;
          },
        },
      },
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          boxWidth: 10,
          padding: 10,
          generateLabels: function (chart) {
            const { data } = chart;
            const datasets = data.datasets[0];
            const total = datasets.data.reduce((acc, value) => acc + value, 0);
            return data.labels.map((label, index) => {
              const value = datasets.data[index];
              const percentage = ((value / total) * 100).toFixed(1);
              return {
                text: `${label}: ${percentage}%`,
                fillStyle: datasets.backgroundColor[index],
                pointStyle: "circle",
                borderWidth: 0,
                strokeStyle: datasets.backgroundColor[index],
              };
            });
          },
        },
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default SportPieChart;
