import React, { useState } from "react";
import {
  BiHomeAlt,
  BiCalendarAlt,
  BiChart,
  BiFlag,
  BiBriefcase,
  BiHistory,
  BiSearch,
} from "react-icons/bi";
import { FiUsers } from "react-icons/fi";

import { AiOutlineMail } from "react-icons/ai";

export default function Sidebar() {
  const [sidebarSubItem, setSidebarSubItem] = useState(false);

  const SidebarSubItemToggle = () => {
    setSidebarSubItem((current) => !current);
  };
  return (
    <>
      <aside className=" flex bg-orange-500  w-36 lg:w-44 ">
        <nav className="flex flex-col my-4 space-y-4 text-white ">
          <div className="flex flex-col space-y-2" onClick={SidebarSubItemToggle}>
            <div className="flex flex-row ">
              <div className=" mx-3 self-center  text-xl lg:text-2xl">
                <BiHomeAlt />
              </div>
              <div className="  text-xs lg:text-sm font-semibold">
                <p>Accueil</p>
              </div>
            </div>
            <div
              className={sidebarSubItem ? "flex flex-col justify-center items-center " : "hidden"}
            >
              <div>test</div>
              <div> test</div>
            </div>
          </div>

          <div className="flex flex-row ">
            <div className=" mx-3 self-center text-xl lg:text-2xl">
              <BiCalendarAlt />
            </div>
            <div className=" text-xs lg:text-sm font-semibold">
              <p>Réservations</p>
            </div>
          </div>
          <div className="flex flex-row ">
            <div className=" mx-3 self-center text-xl lg:text-2xl">
              <BiChart />
            </div>
            <div className=" text-xs lg:text-sm font-semibold">
              <p>Tableau de bord</p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className=" mx-3 self-center text-xl lg:text-2xl">
              <BiFlag />
            </div>
            <div className=" text-xs lg:text-sm font-semibold">
              <p>Terrains</p>
            </div>
          </div>
          <div className="flex flex-row ">
            <div className=" mx-3 self-center text-xl lg:text-2xl">
              <BiBriefcase />
            </div>
            <div className=" text-xs lg:text-sm font-semibold">
              <p>Clients</p>
            </div>
          </div>
          <div className="flex flex-row    ">
            <div className=" mx-3 self-center text-xl lg:text-2xl">
              <BiChart />
            </div>
            <div className=" text-xs lg:text-sm font-semibold">
              <p>Chiffre d’affaire</p>
            </div>
          </div>
          <div className="flex flex-row  ">
            <div className=" mx-3 self-center text-xl lg:text-2xl">
              <BiHistory />
            </div>
            <div className=" text-xs lg:text-sm font-semibold">
              <p>Clients</p>
            </div>
          </div>
          <div className="flex flex-row  ">
            <div className=" mx-3 self-center text-xl lg:text-2xl">
              <BiSearch />
            </div>
            <div className=" text-xs lg:text-sm font-semibold">
              <p>Marketing</p>
            </div>
          </div>
          <div className="flex flex-row  ">
            <div className=" mx-3 self-center text-xl lg:text-2xl">
              <BiChart />
            </div>
            <div className=" text-xs lg:text-sm font-semibold">
              <p>Réservations</p>
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
}
