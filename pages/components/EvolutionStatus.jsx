import React, { useRef, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
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
    <>
      <main className="flex w-full bg-gray-100  overflow-y-auto">
        <div className="flex flex-col w-full  p-1 lg:p-8 ">
          <div className="flex  text-xl font-semibold pb-3">Evolution de reservation</div>
          <div className="flex  flex-col space-y-5">
            <div className="flex flex-row  justify-between ">
              <div className="flex flex-row w-1/2 justify-start items-center lg:space-x-3">
                <select
                  data-te-select-init
                  className="flex lg:p-1 outline-none  rounded text-gray-600 text-xs lg:text-sm"
                >
                  <option value="1">Default</option>
                  <option value="2">Une Semaine</option>
                  <option value="3">Un jour</option>
                </select>
              </div>
              <div className="flex w-1/2 justify-end">
                <select
                  data-te-select-init
                  className="flex lg:p-1 bg-blue-500 rounded text-white text-xs lg:text-sm"
                >
                  <option value="1">30 derniers Jours</option>
                  <option value="2">Une Semaine</option>
                  <option value="3">Un jour</option>
                </select>
              </div>
            </div>
          </div>
          <div className="  p-2 bg-white border rounded-b-xl">
            <div
              className="flex w-auto h-[400px] justify-center"
              style={{
                padding: "20px",
                cursor: "pointer",
              }}
            >
              <Line data={data} options={options}></Line>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
