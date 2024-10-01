import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

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
    const getTerrains = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/getTerrain");
        const data = await response.json();
        setTerrains(data);
      } catch (error) {
        console.error("Error fetching terrains:", error);
      }
    };
    getTerrains();
  }, []);
  useEffect(() => {
    const getReservations = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/getReservations");
        const data = await response.json();
        setReservation(data);
      } catch (error) {
        console.error("Error fetching Reservations:", error);
      }
    };
    getReservations();
  }, []);

  const handleTerrainChange = (e) => {
    setActivité(e.target.value);
  };

  // Handle date range selection from FullCalendar
  const handleDateSelect = (selectInfo) => {
    const { start, end } = selectInfo;
    setSelectedDateRange({
      startDate: start,
      endDate: end,
    });
  };

  const slotLabelFormat = {
    hour: "numeric",
    minute: "2-digit",
  };

  const UpdateData = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const SubmitData = async (e) => {
    e.preventDefault();

    const formData = {
      ...form,
      activité,
      DateDebut: selectedDateRange.startDate,
      DateFin: selectedDateRange.endDate,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/addReservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Form submitted successfully:", data);
      } else {
        console.error("Form submission failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  const events = reservation.map((res) => ({
    title: res.terrain.activité,
    start: res.DateDebut,
    end: res.DateFin,
  }));

  return (
    <main className="flex w-full bg-gray-100 overflow-y-auto">
      <div className="flex flex-col w-full space-y-8 py-4 px-4">
        <div className="flex w-full flex-col lg:flex-row gap-6">
          <div className="flex w-full flex-col space-y-4">
            <div className="flex lg:flex-row flex-col w-full lg:justify-evenly">
              {/* Terrain Select */}
              <div className="flex w-full justify-center">
                <select
                  data-te-select-init
                  className="py-1 rounded-md text-sm lg:px-8 border-2"
                  value={activité}
                  onChange={handleTerrainChange}
                >
                  <option value="">Select Terrain</option>
                  {terrains.map((terrain) => (
                    <option key={terrain.id} value={terrain.activité}>
                      {terrain.activité}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex w-full justify-center">
                <select data-te-select-init className="py-1 rounded-md text-sm lg:px-8 border-2">
                  <option value="1">Payés et le reste</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>
              </div>
            </div>

            <FullCalendar
              plugins={[timeGridPlugin, interactionPlugin]}
              weekends={false}
              allDaySlot={false}
              locale={"fr"}
              slotLabelFormat={slotLabelFormat}
              navLinks={true}
              headerToolbar={{
                left: "prev",
                center: "title",
                right: "next",
              }}
              selectable={true}
              select={handleDateSelect}
              events={events}
            />
          </div>

          {/* Form Section */}
          <div className="flex w-full flex-col lg:px-10">
            <form
              className="flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={SubmitData}
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

              {/* Telephone */}
              <div className="flex justify-center mb-4">
                <input
                  className="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="Tel"
                  type="text"
                  placeholder="Téléphone"
                  onChange={UpdateData}
                />
              </div>

              {/* Email */}
              <div className="flex justify-center mb-4">
                <input
                  className="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="Email"
                  type="email"
                  placeholder="Email"
                  onChange={UpdateData}
                />
              </div>

              {/* Sport Details */}
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

              {/* Submit Button */}
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
