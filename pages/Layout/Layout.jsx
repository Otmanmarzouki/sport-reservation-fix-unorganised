import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./sidebar";
export default function Layout({ children }) {
  const [isActive, setActive] = useState("");
  function handleToggle() {
    setActive(!isActive);
  }

  return (
    <>
      <div className="flex flex-col h-screen">
        <Header handleToggle={handleToggle} />
        <div className="flex flex-row h-screen overflow-hidden ">
          <div className={isActive ? "flex " : "hidden"}>
            <Sidebar handleToggle={isActive} />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
