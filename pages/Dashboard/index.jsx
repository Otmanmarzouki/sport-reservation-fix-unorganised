import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import SidebarLayout from "../Layout/sidebar";
import Header from "../Layout/Header";
import { FaFilter, FaClock } from 'react-icons/fa';

Chart.register(...registerables);

const initialData = {
  // Valeurs pour les 30 derniers jours
  labels: Array.from({ length: 31 }, (_, i) => {
    const date = new Date();
    date.setDate(1);
    date.setDate(date.getDate() + i);
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  }),
  datasets: [
    {
      label: 'Créneaux réservés',
      data: [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 3, 3, 2, 2, 2, 1, 1.5, 2, 1, 2, 1.5, 2, 2, 2.5, 2.5, 1, 1.5, 2, 2.5, 3, 2, 2, 2],
      fill: true,
      borderColor: 'blue',
      backgroundColor: 'rgba(0, 0, 255, 0.10)',
      borderWidth: 1,
      pointRadius: 2,
      pointHoverRadius: 4,
    },
    {
      label: 'Créneaux annulés',
      data: [1, 1.2, 1.4, 1.6, 1.8, 2, 2.2, 2.4, 2.6, 2.8, 3, 2, 2, 2, 2.5, 3, 3, 1, 1, 1, 1, 2, 2, 3, 3, 2, 3, 2.5, 2.5, 3, 1],
      fill: true,
      borderColor: 'rgba(255, 165, 0, 0.8)',
      backgroundColor: 'rgba(255, 165, 0, 0.10)',
      borderWidth: 1,
      pointRadius: 2,
      pointHoverRadius: 4,
    },
  ],
};

// Données pour les 7 derniers jours
const sevenDaysData = {
  labels: Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - i)); // Dernier jour d'abord
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  }),
  datasets: [
    {
      label: 'Créneaux réservés',
      data: [1, 1.5, 2, 2, 2.5, 2, 2], // Remplacez par vos données réelles
      fill: true,
      borderColor: 'blue',
      backgroundColor: 'rgba(0, 0, 255, 0.10)',
      borderWidth: 1,
      pointRadius: 2,
      pointHoverRadius: 4,
    },
    {
      label: 'Créneaux annulés',
      data: [0.5, 1, 1, 1.5, 2, 2, 1], // Remplacez par vos données réelles
      fill: true,
      borderColor: 'rgba(255, 165, 0, 0.8)',
      backgroundColor: 'rgba(255, 165, 0, 0.10)',
      borderWidth: 1,
      pointRadius: 2,
      pointHoverRadius: 4,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: false,
      min: 0,
      max: 3.5,
      ticks: {
        stepSize: 0.5,
        callback: function (value) {
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
  const [showSidebar, setShowSidebar] = useState(false);
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const filterOptions = ['Default', 'Option 2', 'Option 3'];
  const [selectedFilter, setSelectedFilter] = useState('Default');
  const [selectedRange, setSelectedRange] = useState('30 Derniers Jours');
  const [showDateRangeOptions, setShowDateRangeOptions] = useState(false);
  const dateRanges = ['7 Derniers Jours', '30 Derniers Jours'];

  const handleToggle = () => {
    setShowSidebar(prevState => !prevState);
  };

  // Fonction pour obtenir les données en fonction de la plage sélectionnée
  const getData = () => {
    return selectedRange === '7 Derniers Jours' ? sevenDaysData : initialData;
  };

  return (
    <div className="relative flex h-screen overflow-hidden">
      <div className="w-full fixed top-0 bg-white shadow-md z-10">
        <Header handleToggle={handleToggle} />
      </div>

      <div className="flex flex-1 pt-16 overflow-y-auto">
        <div
          className={`fixed top-16 left-0 w-48 h-full bg-white shadow-md z-20 transition-transform duration-300 ease-in-out ${showSidebar ? 'block' : 'hidden'} lg:block`}
        >
          <SidebarLayout />
        </div>

        <div className="flex-1 ml-0 lg:ml-48 bg-gray-100 p-4 md:p-6 pt-6">
          <h3 className="text-xl md:text-2xl mt-4 md:mt-6 font-bold lg:ml-12">Évolution des réservations</h3>

          <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center lg:ml-12">
            <div className="relative">
              <button
                className="flex items-center bg-white text-black border border-black rounded-md px-3 py-2 hover:bg-gray-300 transition mr-4"
                onClick={() => setShowFilterOptions(prev => !prev)}
              >
                <FaFilter className="mr-2" />
                {selectedFilter}
              </button>

              {showFilterOptions && (
                <div className="absolute mt-2 w-48 bg-white shadow-md rounded-md z-20">
                  {filterOptions.map((option, index) => (
                    <button
                      key={index}
                      className="block px-4 py-2 text-left hover:bg-gray-200 w-full"
                      onClick={() => {
                        setSelectedFilter(option);
                        setShowFilterOptions(false);
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="relative mt-4 sm:mt-0 sm:mr-4 lg:mr-12">
              <button 
                className="flex items-center bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-500 transition" 
                onClick={() => setShowDateRangeOptions(prev => !prev)}
              >
                <FaClock className="mr-2" />
                {selectedRange}
              </button>

              {showDateRangeOptions && (
                <div className="absolute mt-2 w-48 bg-white shadow-md rounded-md z-20">
                  {dateRanges.map((range, index) => (
                    <button
                      key={index}
                      className="block px-4 py-2 text-left hover:bg-gray-200 w-full"
                      onClick={() => {
                        setSelectedRange(range);
                        setShowDateRangeOptions(false);
                      }}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mt-7 flex justify-center">
            <div className="w-full lg:max-w-6xl bg-white shadow-md rounded-lg relative">
              <Line data={getData()} options={options} height={400} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
