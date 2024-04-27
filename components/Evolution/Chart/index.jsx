import React from "react";
import { Line } from "react-chartjs-2";

export default function ChartComponent({ data, options }) {
  return (
    <div className="w-auto lg:h-[400px] flex justify-center items-center p-4 bg-white border rounded-b-xl">
      <Line data={data} options={options}></Line>
    </div>
  );
}
