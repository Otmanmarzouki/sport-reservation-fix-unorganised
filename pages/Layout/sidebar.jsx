import React, { useState } from "react";
import SidebarItem from "@/components/sidebar/items";
import {
  BiHomeAlt,
  BiCalendarAlt,
  BiChart,
  BiFlag,
  BiBriefcase,
  BiHistory,
  BiSearch,
} from "react-icons/bi";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubItems = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <aside className=" flex bg-orange-500  w-36 lg:w-44 ">
      <nav className="flex flex-col my-4 space-y-4 text-white">
        <SidebarItem icon={<BiHomeAlt />} text="Accueil" onClick={toggleSubItems}>
          <div className={isOpen ? "flex flex-col justify-center items-center" : "hidden"}>
            <div>Test</div>
            <div>Test</div>
          </div>
        </SidebarItem>
        <SidebarItem icon={<BiCalendarAlt />} text="Réservations" />
        <SidebarItem icon={<BiChart />} text="Tableau de bord" />
        <SidebarItem icon={<BiFlag />} text="Terrains" />
        <SidebarItem icon={<BiBriefcase />} text="Clients" />
        <SidebarItem icon={<BiChart />} text="Chiffre d’affaire" />
        <SidebarItem icon={<BiHistory />} text="Clients" />
        <SidebarItem icon={<BiSearch />} text="Marketing" />
        <SidebarItem icon={<BiChart />} text="Réservations" />
      </nav>
    </aside>
  );
}
