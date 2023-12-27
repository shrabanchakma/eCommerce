import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useState } from "react";
import Sidebar from "../Pages/Home/Sidebar/Sidebar";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} />
        <div className={`flex-grow`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
