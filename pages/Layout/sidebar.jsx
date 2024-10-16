import React, { useEffect, useState } from "react";
import SidebarItem from "@/components/sidebar/Items";
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
        <div
          className="fixed inset-0 bg-orange-400 opacity-80 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <div
        className={`fixed lg:static top-0 left-0 h-full lg:h-screen z-50 transition-transform transform bg-orange-400 text-white ${
          isOpen ? (isMobile ? "w-full translate-x-0" : "lg:w-56") : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="p-4 flex flex-col h-full overflow-y-auto">
          <button className="lg:hidden text-white mb-2">
            <FaTimes />
          </button>

          <ul className={`flex flex-col space-y-2 ${isMobile ? "items-start px-2" : ""}`}>
            <li>
              <SidebarItem icon={<FaHome />} text="Accueil" />
            </li>
            <li>
              <SidebarItem icon={<FaCalendarAlt />} text="Réservations" />
            </li>
            <li>
              <SidebarItem icon={<FaChartBar />} text="Tableau de bord" />
            </li>
            <li>
              <SidebarItem icon={<FaFutbol />} text="Terrains" />
            </li>
            <li>
              <SidebarItem icon={<FaUsers />} text="Clients" />
            </li>
            <li>
              <SidebarItem icon={<FaMoneyBill />} text="Chiffre d'affaire" />
            </li>
            <li>
              <SidebarItem icon={<FaHistory />} text="Historique" />
            </li>
          </ul>

          <div className="mt-auto">
            <ul className={`flex flex-col space-y-2 ${isMobile ? "items-start px-2" : ""}`}>
              <li>
                <SidebarItem icon={<FaBullhorn />} text="Marketing" />
              </li>
              <li>
                <SidebarItem icon={<FaHeadset />} text="Support" />
              </li>
              <li>
                <SidebarItem icon={<FaCog />} text="Paramètres" />
              </li>
              <li className="mt-2 w-full border-t-2 border-white pt-2">
                <SidebarItem icon={<FaSignOutAlt />} text="Déconnexion" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
