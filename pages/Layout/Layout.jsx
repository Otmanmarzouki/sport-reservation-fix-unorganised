import React, { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./sidebar";

export default function Layout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  function handleToggle() {
    setSidebarOpen(!isSidebarOpen);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Header handleToggle={handleToggle} />

      {/* Main Content with Sidebar */}
      <div className="flex flex-row h-full overflow-hidden">
        <div
          className={`transition-all duration-300 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 lg:flex`}
        >
          <Sidebar />
        </div>

        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </div>
  );
}
