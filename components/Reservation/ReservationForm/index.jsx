import React, { useState } from "react";

const ReservationForm = ({ onUpdateData, onSubmitData }) => {
  const [form, setForm] = useState({
    Username: "",
    Telephone: "",
    Email: "",
    Details: "",
    Payment: "",
  });

  const UpdateData = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    onUpdateData(form);
  };

  const SubmitData = (e) => {
    e.preventDefault();
    onSubmitData(form);
  };

  return (
    <form className="flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
      <div className="flex mb-4 text-lg font-semibold">
        <h3>Informations personnelles</h3>
      </div>
      <div className="flex justify-center mb-4 ">
        <input
          className="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="Username"
          type="text"
          placeholder="Nom"
          onChange={UpdateData}
        />
      </div>
      <div className="flex justify-center mb-4">
        <input
          className="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="Telephone"
          type="text"
          placeholder="Telephone"
          onChange={UpdateData}
        />
      </div>
      <div className="flex justify-center mb-4">
        <input
          className="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="Email"
          type="text"
          placeholder="Email"
          onChange={UpdateData}
        />
      </div>
      <div className="flex mb-4 text-lg font-semibold">
        <h3>Sport details</h3>
      </div>
      <div className="flex mb-4">
        <input
          className="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="Details"
          type="text"
          placeholder="Joueur"
          onChange={UpdateData}
        />
      </div>
      <div className="flex flex-row mb-4 space-x-2">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="h-4 w-4 rounded-full shadow"
            name="Payment"
            value="Online"
            onChange={UpdateData}
          />
        </div>
        <div className="flex items-center">
          <span className="text-sm">Paiement en ligne</span>
        </div>
      </div>
      <div className="flex flex-row mb-4 space-x-2">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="h-4 w-4 rounded-full shadow"
            name="Payment"
            value="Cash"
            onChange={UpdateData}
          />
        </div>
        <div className="flex items-center">
          <span className="text-sm">Paiement espece</span>
        </div>
      </div>
      <div className="flex  justify-center">
        <button
          className="w-2/3 text-sm p-1 bg-blue-500 hover:bg-blue-700 text-white px-8 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={SubmitData}
        >
          Procéder
        </button>
      </div>
    </form>
  );
};

export default ReservationForm;
