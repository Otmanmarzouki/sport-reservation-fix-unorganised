import React from "react";
import { Line } from "react-chartjs-2";
import { IoFilter } from "react-icons/io5";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip, Filler);

const salesData = [
  { month: "January", sales: 100 },
  { month: "February", sales: 150 },
  { month: "March", sales: 200 },
  { month: "April", sales: 120 },
  { month: "May", sales: 180 },
  { month: "June", sales: 250 },
];

export default function EvolutionStatus() {
  const data = {
    labels: salesData.map((data) => data.month),
    datasets: [
      {
        label: "Revenue",
        data: salesData.map((data) => data.sales),
        borderColor: "#cb0c9f",
        borderWidth: 3,
        pointBorderColor: "#cb0c9f",
        pointBorderWidth: 3,
        tension: 0.5,
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "#f797e1");
          gradient.addColorStop(1, "white");
          return gradient;
        },
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
    responsive: true,
    scales: {
      y: {
        ticks: {
          font: {
            size: 17,
            weight: "bold",
          },
        },
        title: {
          display: true,
          text: "Sales",
          padding: {
            bottom: 10,
          },
          font: {
            size: 30,
            style: "italic",
            family: "Arial",
          },
        },
        min: 50,
      },
      x: {
        ticks: {
          font: {
            size: 17,
            weight: "bold",
          },
        },
        title: {
          display: true,
          text: "Month",
          padding: {
            top: 10,
          },
          font: {
            size: 30,
            style: "italic",
            family: "Arial",
          },
        },
      },
    },
  };

  return (
    <main className="w-full bg-gray-100 overflow-y-auto space-y-6 p-8">
      <div className="text-xl font-semibold pb-6">Evolution de reservation</div>
      <div className="flex flex-row justify-between items-center space-x-3 lg:space-x-0">
        <div className="flex w-1/2">
          <label htmlFor="timePeriod" className="sr-only">
            Time Period
          </label>
          <select
            id="timePeriod"
            data-te-select-init
            className="p-1 outline-none rounded text-xs lg:text-sm border border-gray-300"
          >
            <option value="1">Default</option>
            <option value="2">Une Semaine</option>
            <option value="3">Un jour</option>
          </select>
          <IoFilter className="text-gray-600 ml-2" />
        </div>
        <div className="flex w-1/2 justify-end space-x-3">
          <label htmlFor="dateRange" className="sr-only">
            Date Range
          </label>
          <select
            id="dateRange"
            data-te-select-init
            className="p-1 bg-blue-500 rounded text-white text-xs lg:text-sm"
          >
            <option value="1">30 derniers Jours</option>
            <option value="2">Une Semaine</option>
            <option value="3">Un jour</option>
          </select>
        </div>
      </div>
      <div
        className="flex justify-center w-auto h-[400px]  items-center p-4 bg-white border rounded-b-xl"
        style={{
          padding: "20px",
          cursor: "pointer",
        }}
      >
        <Line data={data} options={options}></Line>
      </div>
    </main>
  );
}
