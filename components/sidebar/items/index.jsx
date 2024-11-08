import React from "react";

export default function SidebarItem({ icon, text, children, onClick }) {
  return (
    <div
    className="flex items-center hover:bg-[rgba(250,164,94,0.7)] cursor-pointer p-2 rounded-lg transition-colors duration-200"
    onClick={onClick}
    >
      <div className="mx-2 text-xl">{icon}</div>
      <div className="text-sm font-semibold flex-grow">{text}</div>
      {children}
    </div>
  );
}
