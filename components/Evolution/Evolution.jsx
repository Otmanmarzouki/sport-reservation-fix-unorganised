import React from "react";
import ChartComponent from "./Chart/index";
import SelectComponent from "./Filter";
import { IoFilter } from "react-icons/io5";
import { formatDate } from "./functions/index";

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
  { date: "2024-01-01", sales: 0.5 },
  { date: "2024-01-05", sales: 1.0 },
  { date: "2024-01-10", sales: 1.5 },
  { date: "2024-02-01", sales: 1.0 },
  { date: "2024-02-05", sales: 2.0 },
  { date: "2024-05-10", sales: 2.0 },
  { date: "2024-06-10", sales: 1.5 },
  { date: "2024-07-10", sales: 1.0 },
  { date: "2024-08-10", sales: 2.1 },
  { date: "2024-09-10", sales: 1.5 },
  // and so on...
];

export default function Evolution() {
  const data = {
    labels: salesData.map((data) => data.date),
    datasets: [
      {
        data: salesData.map((data) => data.sales),
        borderColor: "blue",
        borderWidth: 1,
        pointBorderWidth: 3,
        tension: 0.2,
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 100, 400);
          gradient.addColorStop(0, "orange");
          gradient.addColorStop(1, "white");
          return gradient;
        },
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: {
          font: {
            size: 10,
            weight: "normal",
          },
          min: 0.5,
          max: 2.5,
          stepSize: 0.5,
          callback: function (value) {
            return value + "%";
          },
        },
      },
      x: {
        labels: salesData.map((data) => formatDate(data.date)),
        ticks: {
          font: {
            size: 10,
            weight: "normal",
          },
          maxRotation: 90,
          minRotation: 90,
        },
      },
    },
  };

  const timePeriodOptions = [
    { value: "1", label: "Default" },
    { value: "2", label: "Une Semaine" },
    { value: "3", label: "Un jour" },
  ];

  const dateRangeOptions = [
    { value: "1", label: "30 derniers Jours" },
    { value: "2", label: "Une Semaine" },
    { value: "3", label: "Un jour" },
  ];

  return (
    <main className="w-full bg-gray-100 overflow-y-auto  p-5">
      <div className="text-xl font-semibold pb-6">Evolution de reservation</div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between ">
          <div className="flex flex-row justify-between  ">
            <SelectComponent id="timePeriod" label="Time Period" options={timePeriodOptions} />
            <div className=" flex justify-center items-center">
              <IoFilter className="text-gray-600 ml-2" />
            </div>
          </div>
          <div className="flex">
            <SelectComponent id="dateRange" label="Date Range" options={dateRangeOptions} />
          </div>
        </div>
        <div>
          <ChartComponent data={data} options={options} />
        </div>
      </div>
    </main>
  );
}
