import React, { useState } from "react";

import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";

const NouvelleReservationComponent = () => {
  const [form, setForm] = useState({
    Username: "",
    Telephone: "",
    Email: "",
    Details: "",
    Payment: "",
  });

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
  const SubmitData = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <>
      <main className="flex w-full bg-gray-100 overflow-y-auto ">
        <div className="flex flex-col w-full space-y-8 py-4 px-4 ">
          <div className="flex w-full flex-col lg:flex-row gap-6">
            <div className="flex w-full flex-col  space-y-4">
              <div className="flex lg:flex-row  flex-col w-full space-y-2  lg:justify-evenly ">
                <div className="flex w-full justify-center">
                  <select
                    data-te-select-init
                    className=" py-1 rounded-md  text-sm lg:px-8  border-2 "
                  >
                    <option value="1">Activités</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="flex w-full justify-center">
                  <select
                    data-te-select-init
                    className=" py-1 rounded-md   text-sm lg:px-8 border-2 "
                  >
                    <option value="1">Payés et le reste</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <FullCalendar
                plugins={[timeGridPlugin]}
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
              />
            </div>
            <div className="flex w-full flex-col lg:px-10">
              <form className="flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
                <div className="flex  mb-4 text-lg font-semibold">
                  <h3>Informations personnelles</h3>
                </div>
                <div className=" flex justify-center mb-4 ">
                  <input
                    className="shadow  w-full appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="Username"
                    type="text"
                    placeholder="Nom"
                    onChange={UpdateData}
                  />
                </div>
                <div className=" flex justify-center mb-4">
                  <input
                    className="shadow w-full appearance-none border  rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="Telephone"
                    type="text"
                    placeholder="Telephone"
                    onChange={UpdateData}
                  />
                </div>
                <div className=" flex justify-center mb-4">
                  <input
                    className="shadow w-full appearance-none border  rounded  py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                    name="Email"
                    type="text"
                    placeholder="Email"
                    onChange={UpdateData}
                  />
                </div>
                <div className="flex  mb-4 text-lg font-semibold">
                  <h3>Sport details</h3>
                </div>
                <div className=" flex  mb-4">
                  <input
                    className="shadow  w-full appearance-none border  rounded  py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                    name="Details"
                    type="text"
                    placeholder="Joueur"
                    onChange={UpdateData}
                  />
                </div>
                <div className=" flex flex-row  mb-4 space-x-2">
                  <div className="flex  items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded-full shadow"
                      name="Payment"
                      value="Online"
                      onChange={UpdateData}
                    />
                  </div>
                  <div className="flex  items-center">
                    <span className="text-sm">Paiement en ligne</span>
                  </div>
                </div>
                <div className=" flex flex-row  mb-4 space-x-2">
                  <div className="flex  items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded-full shadow"
                      name="Payment"
                      value="Cash"
                      onChange={UpdateData}
                    />
                  </div>
                  <div className="flex  items-center">
                    <span className="text-sm">Paiement espece</span>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    className=" bg-blue-500 hover:bg-blue-700 text-white   px-8 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={SubmitData}
                  >
                    Procéder
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NouvelleReservationComponent;
