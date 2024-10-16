import React, { useEffect, useState } from "react";
import SidebarItem from "@/components/sidebar/Items"; // Ensure the import path is correct
import {
  FaHome,
  FaCalendarAlt,
  FaChartBar,
  FaFutbol,
  FaUsers,
  FaMoneyBill,
  FaHistory,
  FaBullhorn,
  FaHeadset,
  FaCog,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";

export default function Sidebar({ isOpen, toggleSidebar }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 1024);
      }
    };

    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);
    return () => window.removeEventListener("resize", checkWindowSize);
  }, []);

  return (
    <>
      {isOpen && isMobile && (
        <div className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden" onClick={toggleSidebar} />
      )}

      <div
        className={`fixed lg:static top-0 left-0 h-full lg:h-screen w-64 z-50 transition-transform transform bg-orange-400 text-white ${
          isOpen && isMobile ? "translate-x-0" : "-translate-x-full"
        } ${!isMobile ? "lg:translate-x-0" : ""}`}
      >
        <div className="p-6">
          <button className="lg:hidden text-white mb-4" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <ul className="flex flex-col space-y-6">
            <li>
              <SidebarItem icon={<FaHome />} text="Accueil" onClick={toggleSidebar} />
            </li>
            <li>
              <SidebarItem icon={<FaCalendarAlt />} text="Réservations" onClick={toggleSidebar} />
            </li>
            <li>
              <SidebarItem icon={<FaChartBar />} text="Tableau de bord" onClick={toggleSidebar} />
            </li>
            <li>
              <SidebarItem icon={<FaFutbol />} text="Terrains" onClick={toggleSidebar} />
            </li>
            <li>
              <SidebarItem icon={<FaUsers />} text="Clients" onClick={toggleSidebar} />
            </li>
            <li>
              <SidebarItem
                icon={<FaMoneyBill />}
                text="Chiffre d'affaire"
                onClick={toggleSidebar}
              />
            </li>
            <li>
              <SidebarItem icon={<FaHistory />} text="Historique" onClick={toggleSidebar} />
            </li>
          </ul>
        </div>

        <div className="p-6 mt-24 flex flex-col space-y-6">
          <ul className="flex flex-col space-y-6">
            <li>
              <SidebarItem icon={<FaBullhorn />} text="Marketing" onClick={toggleSidebar} />
            </li>
            <li>
              <SidebarItem icon={<FaHeadset />} text="Support" onClick={toggleSidebar} />
            </li>
            <li>
              <SidebarItem icon={<FaCog />} text="Paramètres" onClick={toggleSidebar} />
            </li>
            <li className="mt-6 w-full border-t-2 border-white pt-3">
              <SidebarItem icon={<FaSignOutAlt />} text="Déconnexion" onClick={toggleSidebar} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
