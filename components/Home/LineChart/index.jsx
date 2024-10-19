import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
);

const LineHome = () => {
  const data = {
    labels: [
      "00:00",
      "02:00",
      "04:00",
      "06:00",
      "08:00",
      "10:00",
      "12:00",
      "14:00",
      "16:00",
      "18:00",
      "20:00",
      "22:00",
    ],
    datasets: [
      {
        label: "Sport 1",
        data: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
        borderColor: "#FF7F0E",
        backgroundColor: "rgba(255, 127, 14, 0.2)",
        fill: true,
        tension: 0.3,
      },
      {
        label: "Sport 2",
        data: [3, 6, 9, 12, 18, 25, 28, 30, 35, 45, 55, 65],
        borderColor: "#1F77B4",
        backgroundColor: "rgba(31, 119, 180, 0.2)",
        fill: true,
        tension: 0.3,
      },
      {
        label: "Sport 3",
        data: [7, 14, 12, 25, 30, 20, 32, 38, 45, 48, 55, 58],
        borderColor: "#2CA02C",
        backgroundColor: "rgba(44, 160, 44, 0.2)",
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#333",
        },
      },
      y: {
        grid: {
          color: "#e5e5e5",
        },
        ticks: {
          color: "#333",
          stepSize: 10,
        },
      },
    },
  };

  return (
    <div className="h-96">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineHome;
