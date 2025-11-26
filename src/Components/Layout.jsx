import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Menu } from "lucide-react";
import SideBar from "./SideBar";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 relative">
      {/* Sidebar */}
      <SideBar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main content */}
      <main className="flex-1 p-6 w-full">
        {/* Mobile navbar toggle */}
        <div className="md:hidden mb-4 flex items-center justify-between">
          <button
            className="p-2 rounded-md border bg-white"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
          <h1 className="font-semibold text-lg">Dashboard</h1>
        </div>

        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
