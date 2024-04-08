import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Header({ handleToggle }) {
  return (
    <>
      <div className="flex flex-row bg-white h-14 justify-between px-5">
        <div className="flex items-center text-black  text-xl font-bold">
          <button onClick={handleToggle}>test </button>
          <h1>LOGO</h1>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-row space-x-2 lg:space-x-10">
            <div className="flex flex-row space-x-3">
              <div className="flex  justify-center items-center lg:text-xl text-black">
                <IoIosNotificationsOutline />
                <div className=" relative">
                  <div className="absolute bottom-0 left-auto right-0 top-0  inline-block  rounded-full bg-blue-600 p-1 text-xs"></div>
                </div>
              </div>

              <div className=" hidden lg:flex flex-col justify-center ">
                <div className="flex text-black text-xs">
                  <p>El marzouki</p>
                </div>
                <div className="flex text-black text-xs">
                  <p>Otman</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row lg:space-x-3 justify-center items-center">
              <img src="/img/ProfilePhoto.jpg" className=" lg:h-14 lg:w-14  w-9 h-9 rounded-full" />
              <div className="flex justify-center items-center  text-blue-600">
                <MdKeyboardArrowDown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
