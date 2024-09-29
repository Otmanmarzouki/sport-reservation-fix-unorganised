import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const NouvelleReservationComponent = () => {
  const [terrains, setTerrains] = useState([]);
  const [selectedTerrain, setSelectedTerrain] = useState();
  const [selectedDateRange, setSelectedDateRange] = useState({
    startDate: "",
    endDate: "",
  });
  const [form, setForm] = useState({
    Username: "",
    Telephone: "",
    Email: "",
    Details: "",
  });

  // Fetch terrains data on component load
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

  const handleTerrainChange = (e) => {
    setSelectedTerrain(e.target.value);
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
      selectedTerrain,
      startDate: selectedDateRange.startDate,
      endDate: selectedDateRange.endDate,
    };

    console.log("Submitting form data:", formData);

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

  return (
    <main className="flex w-full bg-gray-100 overflow-y-auto ">
      <div className="flex flex-col w-full space-y-8 py-4 px-4 ">
        <div className="flex w-full flex-col lg:flex-row gap-6">
          <div className="flex w-full flex-col space-y-4">
            <div className="flex lg:flex-row flex-col w-full space-y-2 lg:justify-evenly ">
              {/* Terrain Select */}
              <div className="flex w-full justify-center">
                <select
                  data-te-select-init
                  className="py-1 rounded-md text-sm lg:px-8 border-2"
                  value={selectedTerrain}
                  onChange={handleTerrainChange}
                >
                  <option value="">Select Terrain</option>
                  {terrains.map((terrain) => (
                    <option key={terrain.id} value={terrain.id}>
                      {terrain.Nom_Terrain}
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
              selectable={true} // Enable date selection
              select={handleDateSelect} // Handle date selection
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
                  name="Username"
                  type="text"
                  placeholder="Nom"
                  onChange={UpdateData}
                />
              </div>

              {/* Telephone */}
              <div className="flex justify-center mb-4">
                <input
                  className="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="Telephone"
                  type="text"
                  placeholder="Telephone"
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
                <h3>Sport details</h3>
              </div>
              <div className="flex mb-4">
                <input
                  className="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="Details"
                  type="text"
                  placeholder="Details"
                  onChange={UpdateData}
                />
              </div>

              {/* Payment Options */}
              <div className="flex flex-row mb-4 space-x-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded-full shadow"
                    name="Payment"
                    value="Online"
                  />
                  <span className="ml-2 text-sm">Paiement en ligne</span>
                </div>
              </div>

              <div className="flex flex-row mb-4 space-x-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded-full shadow"
                    name="Payment"
                    value="Cash"
                  />
                  <span className="ml-2 text-sm">Paiement en espèces</span>
                </div>
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
