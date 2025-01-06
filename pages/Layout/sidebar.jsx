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
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && isMobile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleSidebar} />
      )}

      <div
        className={`fixed lg:static top-0 left-0 h-full lg:h-screen z-50 bg-gradient-to-b from-orange-500 to-orange-700 text-white shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? (isMobile ? "translate-x-0 w-full " : "lg:w-64") : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Sidebar Header */}
        <div className="flex  justify-between border-orange-300">
          {isMobile && (
            <div className="flex w-full justify-end p-4">
              <button
                onClick={toggleSidebar}
                className="text-white text-2xl lg:hidden"
                aria-label="Close sidebar"
              >
                <FaTimes />
              </button>
            </div>
          )}
        </div>

        {/* Scrollable Content */}
        <nav className="p-2 space-y-3 h-full overflow-y-auto">
          {/* Main Section */}
          <ul className="space-y-2">
            <SidebarItem icon={<FaHome />} text="Accueil" />
            <SidebarItem icon={<FaCalendarAlt />} text="Réservations" />
            <SidebarItem icon={<FaChartBar />} text="Tableau de bord" />
            <SidebarItem icon={<FaFutbol />} text="Terrains" />
            <SidebarItem icon={<FaUsers />} text="Clients" />
            <SidebarItem icon={<FaMoneyBill />} text="Chiffre d'affaire" />
            <SidebarItem icon={<FaHistory />} text="Historique" />
          </ul>

          {/* Secondary Section */}
          <ul className="space-y-2  border-t border-orange-300 pt-10">
            <SidebarItem icon={<FaBullhorn />} text="Marketing" />
            <SidebarItem icon={<FaHeadset />} text="Support" />
            <SidebarItem icon={<FaCog />} text="Paramètres" />
            <SidebarItem icon={<FaSignOutAlt />} text="Déconnexion" />
          </ul>
        </nav>
      </div>
    </>
  );
}
