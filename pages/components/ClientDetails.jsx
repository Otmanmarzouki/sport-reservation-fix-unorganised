import React from "react";

import { BiFemaleSign, BiMaleSign } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";
import { FiEdit } from "react-icons/fi";

export default function ClientDetails() {
  return (
    <>
      <main className=" w-full bg-gray-100 overflow-y-auto ">
        <div className=" flex  flex-col w-full bg-gray-100 p-2 lg:p-10 space-y-6">
          <div className=" flex lg:flex-row flex-col w-full rounded-xl lg:space-x-3 space-y-3 items-center  ">
            <div>
              <img
                src="/img/ProfilePhoto.jpg"
                className=" lg:h-24 lg:w-24  w-20 h-20 rounded-full"
              />
            </div>
            <div className=" flex flex-col justify-around space-y-2">
              <div className=" text-sm lg:text-lg text-black font-semibold">EL MARZOUKI OTMANE</div>
              <div className="flex flex-row  text-slate-500 font-medium  items-center space-x-4">
                <div className="flex flex-row items-center space-x-2 w-full">
                  <div>
                    <BiMaleSign />
                  </div>
                  <div className=" text-sm lg:text-lg">Monsieur</div>
                </div>
                <div>
                  <FiEdit />
                </div>
              </div>
            </div>
          </div>

          <div className=" flex flex-col w-full lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 ">
            <div className="flex flex-col w-full  lg:w-2/3 bg-white shadow rounded-lg p-2 text-xs lg:text-sm text-gray-500 font-medium space-y-2">
              <div className="flex flex-row ">
                <div className=" w-1/2">Email:</div>
                <div className="w-1/2">test@test.com</div>
              </div>
              <div className="flex flex-row ">
                <div className="w-1/2">Telephone:</div>
                <div className="w-1/2">09939393</div>
              </div>
              <div className="flex flex-row ">
                <div className="w-1/2">Date de naissance:</div>
                <div className="w-1/2">46464646</div>
              </div>
              <div className="flex flex-row ">
                <div className="w-1/2">Date d'inscription:</div>
                <div className="w-1/2">464646</div>
              </div>
            </div>

            <div className="flex flex-col w-full  lg:w-1/3 space-y-2 bg-white shadow rounded-lg p-2">
              <div className="font-semibold lg:text-sm  text-xs">
                <h3>Abonnement :</h3>
              </div>
              <div className="flex flex-row items-center space-x-1 lg:text-sm  text-xs ">
                <RxDotFilled className="text-green-400" />
                <h3>Abonné</h3>
              </div>
              <div className="font-semibold lg:text-sm  text-xs">
                <h3>Réservations :</h3>
              </div>
              <div className="flex flex-row justify-evenly lg:text-sm  text-xs">
                <div className="bg-blue-300 rounded-lg h-7 w-9 flex items-center justify-center text-white  text-xs ">
                  <p>4</p>
                </div>
                <div className="bg-blue-300 rounded-lg h-7 w-16 flex flex-row items-center justify-center  text-white space-x-1   text-xs ">
                  <AiFillEye />
                  <span>Details</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
