import React from "react";

export default function SidebarItem({ icon, text, children, onClick }) {
  return (
    <div className="flex flex-col  hover:bg-orange-700 cursor-pointer space-y-2" onClick={onClick}>
      <div className="flex flex-row">
        <div className="mx-2 self-center text-xl lg:text-xl">{icon}</div>
        <div className="text-xs lg:text-sm font-semibold">
          <p>{text}</p>
        </div>
      </div>
      {children}
    </div>
  );
}
