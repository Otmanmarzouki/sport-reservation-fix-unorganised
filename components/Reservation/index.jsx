// NouvelleReservationComponent.js
import React, { useEffect, useState } from "react";
import { fetchTerrains, fetchReservations, addReservation } from "@/services/reservation/index";
import Calendar from "./Calendar";
import { FaUserCircle } from "react-icons/fa";

const NouvelleReservationComponent = () => {
  const [terrains, setTerrains] = useState([]);
  const [reservation, setReservation] = useState([]);
  const [activité, setActivité] = useState();
  const [selectedDateRange, setSelectedDateRange] = useState({
    startDate: "",
    endDate: "",
  });
  const [form, setForm] = useState({
    Prenom: "",
    Nom: "",
    Email: "",
    Tel: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const fetchedTerrains = await fetchTerrains();
      setTerrains(fetchedTerrains);
      const fetchedReservations = await fetchReservations();
      setReservation(fetchedReservations);
    };
    fetchData();
  }, []);

  const UpdateData = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateSelect = (selectInfo) => {
    const { start, end } = selectInfo;
    setSelectedDateRange({
      startDate: start,
      endDate: end,
    });
  };

  const getRandomColor = () => {
    const colors = ["#FFDDC1", "#C1FFD7", "#D1C1FF", "#FFC1C1", "#FFF0C1"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const events = reservation.map((res) => ({
    title: res.terrain.activité,
    start: res.DateDebut,
    end: res.DateFin,
    backgroundColor: res.color || getRandomColor(),
    extendedProps: {
      activité: res.terrain.activité,
      startTime: new Date(res.DateDebut).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
      endTime: new Date(res.DateFin).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
      player: "Joueurs",
      icon: <FaUserCircle className="text-gray-600" />,
    },
  }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      ...form,
      activité,
      DateDebut: selectedDateRange.startDate,
      DateFin: selectedDateRange.endDate,
    };
    const result = await addReservation(formData);
    if (result) {
      console.log("Reservation successful:", result);
    }
  };

  return (
    <main className="flex w-full bg-gray-100 overflow-y-auto">
      <div className="flex flex-col w-full space-y-8 py-4 px-4">
        <div className="flex w-full flex-col lg:flex-row gap-6">
          <div className="flex w-full lg:w-2/3 flex-col space-y-4">
            <div className="flex lg:flex-row flex-col w-full lg:justify-evenly">
              <div className="flex w-full justify-center">
                <select
                  data-te-select-init
                  className="py-1 rounded-md text-sm lg:px-8 border-2"
                  value={activité}
                  onChange={(e) => setActivité(e.target.value)}
                >
                  <option value="">Select Terrain</option>
                  {terrains.map((terrain) => (
                    <option key={terrain.id} value={terrain.activité}>
                      {terrain.activité}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <Calendar events={events} handleDateSelect={handleDateSelect} />
          </div>
          <div className="flex flex-col w-full lg:w-1/3 ">
            <form
              className="flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={handleSubmit}
            >
              <div className="flex mb-4 text-lg font-semibold">
                <h3>Informations personnelles</h3>
              </div>
              <div className="flex justify-center mb-4">
                <input
                  className="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="Prenom"
                  type="text"
                  placeholder="Prénom"
                  onChange={UpdateData}
                />
              </div>
              <div className="flex justify-center mb-4">
                <input
                  className="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="Nom"
                  type="text"
                  placeholder="Nom"
                  onChange={UpdateData}
                />
              </div>

              <div className="flex justify-center mb-4">
                <input
                  className="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="Tel"
                  type="text"
                  placeholder="Téléphone"
                  onChange={UpdateData}
                />
              </div>

              <div className="flex justify-center mb-4">
                <input
                  className="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="Email"
                  type="email"
                  placeholder="Email"
                  onChange={UpdateData}
                />
              </div>

              <div className="flex mb-4 text-lg font-semibold">
                <h3>Détails sport</h3>
              </div>
              <div className="flex mb-4">
                <input
                  className="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="details"
                  type="text"
                  placeholder="Détails"
                  onChange={UpdateData}
                />
              </div>

              <div className="flex justify-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white px-8 py-2 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Procéder
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NouvelleReservationComponent;
