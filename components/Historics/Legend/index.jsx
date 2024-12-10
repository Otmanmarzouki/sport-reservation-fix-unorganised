import React from "react";

export default function Legend() {
  const items = [
    { color: "bg-teal-700", label: "Joueurs" },
    { color: "bg-orange-500", label: "créneau Disponible" },
    { color: "bg-blue-700", label: "créneau Annulé" },
  ];

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <span className={`w-3.5 h-3.5 ${item.color} rounded-full`}></span>
          <span className="text-gray-800 text-sm">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
