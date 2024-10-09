import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import SidebarLayout from "../Layout/sidebar";
import HeaderLayout from "../Layout/Header";
import MainLayout from "../Layout/Layout";
import { FaFilter, FaClock } from 'react-icons/fa';

Chart.register(...registerables);

const data = {
  labels: Array.from({ length: 31 }, (_, i) => {
    const date = new Date();
    date.setDate(1);
    date.setDate(date.getDate() + i);
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  }),
  datasets: [
    {
      label: 'Créneaux réservés',
      data: [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 3, 3, 2, 2, 2, 1, 0.5, 0.5, 1, 1.5, 1.5, 2, 2, 2.5, 2.5, 3, 3, 3, 3, 3, 2, 2, 2, 2],
      fill: true,
      borderColor: 'blue',
      backgroundColor: 'rgba(0, 0, 255, 0.10)',
      borderWidth: 1,
    },
    {
      label: 'Créneaux annulés',
      data: [1, 1.2, 1.4, 1.6, 1.8, 2, 2.2, 2.4, 2.6, 2.8, 3, 2, 3, 3, 3, 3, 3, 1, 1, 1, 1, 2, 2, 3, 3, 2, 3, 2.5, 2.5, 3],
      fill: true,
      borderColor: 'rgba(255, 165, 0, 0.8)',
      backgroundColor: 'rgba(255, 165, 0, 0.10)',
      borderWidth: 1,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: false,
      min: 0,
      max: 3.5,
      ticks: {
        stepSize: 0.5,
        callback: function(value) {
          return value + '%';
        },
      },
    },
  },
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        color: '#000',
        usePointStyle: true,
        boxWidth: 10,
        padding: 20,
      },
    },
  },
};

export default function DashboardPage() {
  const [filter, setFilter] = useState('');
  const [duration, setDuration] = useState('');
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  const filterOptions = ['Default', 'Option 2', 'Option 3'];

  return (
    <div className="flex h-screen">
      <div className="flex-1 ml-64">
        <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-10">
          <HeaderLayout />
        </div>

        <div className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-43 shadow-md z-10">
          <SidebarLayout />
        </div>

        <div className="p-6 pt-10  fixed left-10 ml-64">
          <h3 className="text-xl mt-6 p-10 font-bold">Évolution des réservations</h3>

          <div className="mt-4 flex justify-between items-center">
            <div className="flex items-center">
              <button
                className="flex items-center bg-white text-black border border-black rounded-md px-4 py-2 hover:bg-gray-300 transition mr-4"
                onClick={() => setShowFilterOptions(!showFilterOptions)}
              >
                <FaFilter className="mr-2" />
                Filtrer
              </button>

              {showFilterOptions && (
                <div className="absolute mt-2 w-55 bg-white shadow-md rounded-md z-20">
                  {filterOptions.map((option, index) => (
                    <button
                      key={index}
                      className="block px-4 py-2 text-left hover:bg-gray-200 w-full"
                      onClick={() => {
                        setFilter(option);
                        setShowFilterOptions(false);
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button className="flex items-center bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-500 transition">
                <FaClock className="mr-2" />
                30 Derniers Jours
              </button>
            </div>
          </div>

          <div className="mt-7 flex justify-center mr-1">
            <div className="w-full max-w-7xl bg-white shadow-md rounded-lg" style={{ height: '400px', minWidth: '1010px' }}>
              <Line data={data} options={options} height={500} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
