import React from "react";
import { RxDotFilled } from "react-icons/rx";
import { AiFillEye } from "react-icons/ai";

export default function SubscriptionDetails({ subscriptionStatus, numReservations }) {
  return (
    <div className="flex flex-col w-full lg:w-1/3 space-y-2 bg-white shadow rounded-lg p-2">
      <div className="font-semibold lg:text-sm text-xs">
        <h3>Abonnement :</h3>
      </div>
      <div className="flex flex-row items-center space-x-1 lg:text-sm text-xs">
        <RxDotFilled
          className={subscriptionStatus === "active" ? "text-green-400" : "text-red-400"}
        />
        <h3>{subscriptionStatus === "active" ? "Abonné" : "Non abonné"}</h3>
      </div>
      <div className="font-semibold lg:text-sm text-xs">
        <h3>Réservations :</h3>
      </div>
      <div className="flex flex-row justify-evenly lg:text-sm text-xs">
        <div className="bg-blue-300 rounded-lg h-7 w-9 flex items-center justify-center text-white text-xs">
          <p>{numReservations}</p>
        </div>
        <div className="bg-blue-300 rounded-lg h-7 w-16 flex flex-row items-center justify-center text-white space-x-1 text-xs">
          <AiFillEye />
          <span>Details</span>
        </div>
      </div>
    </div>
  );
}
