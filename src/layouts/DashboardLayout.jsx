import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

import NavDrawer from "../components/NavDrawer";

export default function DashboardLayout() {
  return (
    <div className=" flex lg:flex-row flex-col justify-between ">
      {/* navbar */}
      <Nav />
      <div className=" flex items-center justify-between bg-gray-50 p-5 lg:hidden ">
        <NavDrawer />
        <p className=" text-2xl font-bold text-yellow-300 ">FreshMart</p>
      </div>

      <div className=" flex-1 p-5 ">
        <Outlet />
      </div>
    </div>
  );
}
