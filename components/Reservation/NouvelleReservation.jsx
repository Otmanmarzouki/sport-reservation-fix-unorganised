import React, { useState } from "react";
import SelectActivity from "./Dropdown";
import Calendar from "./Calendar";
import ReservationForm from "./ReservationForm";
import SelectDropdown from "./Dropdown";

const NouvelleReservation = () => {
  const [formData, setFormData] = useState({});
  const [selectedActivity, setSelectedActivity] = useState("");

  const handleSelect = (value) => {
    setSelectedActivity(value);
  };
  const activityOptions = [
    { value: "1", label: "Activités" },
    { value: "2", label: "Two" },
    { value: "3", label: "Three" },
  ];
  const paymentOptions = [
    { value: "1", label: "payées et le reste" },
    { value: "2", label: "rest" },
    { value: "3", label: "payées " },
  ];

  const handleUpdateData = (data) => {
    setFormData(data);
  };

  const handleSubmitData = (data) => {
    console.log(data);
  };

  return (
    <main className="flex w-full bg-gray-100 overflow-y-auto ">
      <div className="flex flex-col w-full space-y-8 py-4 px-4 ">
        <div className="flex w-full flex-col lg:flex-row gap-6">
          <div className="flex w-full flex-col  space-y-4">
            <div className="flex lg:flex-row  flex-col w-full space-y-2  lg:justify-evenly ">
              <div className="flex w-full justify-around">
                <SelectDropdown options={activityOptions} onSelect={handleSelect} />
                <SelectDropdown options={paymentOptions} onSelect={handleSelect} />
              </div>
            </div>
            <Calendar />
          </div>
          <div className="  lg:w-1/2 lg:px-5">
            <ReservationForm onUpdateData={handleUpdateData} onSubmitData={handleSubmitData} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default NouvelleReservation;
