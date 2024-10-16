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

      {isSidebarOpen && window.innerWidth < 1024 && (
        <div className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden" onClick={handleToggle} />
      )}

      <div className="flex h-full overflow-hidden">
        <div
          className={`fixed top-0 left-0 h-full bg-orange-400 text-white z-50 transition-transform duration-300 transform ${
            isSidebarOpen ? "translate-x-0 w-full lg:w-64 opacity-90" : "-translate-x-full"
          } lg:static lg:flex lg:w-64`}
        >
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={handleToggle} />
        </div>

        <div className={`flex w-full overflow-auto`}>{children}</div>
      </div>
    </div>
  );
}
