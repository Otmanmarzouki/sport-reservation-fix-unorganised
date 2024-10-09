import React from "react";
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
} from "react-icons/fa"; 

export default function Sidebar() {
  return (
    <div className="w-43 h-screen bg-orange-500 text-white">
      <div className="p-6">
        <ul className="space-y-4"> 
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
      </div>

      <div className="p-6">
        <ul className="space-y-4">
          <li className="mt-20">
            <SidebarItem icon={<FaBullhorn />} text="Marketing" />
          </li>
          <li>
            <SidebarItem icon={<FaHeadset />} text="Support" />
          </li>
          <li>
            <SidebarItem icon={<FaCog />} text="Paramètres" />
          </li>
          <li className="mt-5 w-full border-t-2 border-white pt-3"> 
            <SidebarItem icon={<FaSignOutAlt />} text="Déconnexion" />
          </li>
        </ul>
      </div>
    </div>
  );
}
