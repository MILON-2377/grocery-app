import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import navLinks from "../utils/constants";
import { Link, useLocation } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";

export default function NavDrawer() {
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };
  return (
    <div className="drawer ">
      <input
        id="my-drawer"
        type="checkbox"
        checked={isDrawerOpen}
        onChange={toggleDrawer}
        className="drawer-toggle"
      />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn ">
          <CiMenuFries className=" text-2xl " />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <div className="w-full flex items-center justify-between border-b mb-8 py-3 ">
            <li className=" text-xl font-bold text-yellow-300 ">FreshMart</li>
            <button
              onClick={toggleDrawer}
              className=" hover:bg-red-500 h-7 w-7  flex items-center justify-center rounded-full text-xl hover:text-white transition-all duration-300 hover:cursor-pointer border border-red-400 "
            >
              x
            </button>
          </div>

          {[...navLinks].map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className={` ${
                location.pathname === item.path &&
                " text-green-500 bg-green-100 font-semibold "
              } mb-2 text-green-400  hover:cursor-pointer transition-all duration-300 text-sm  px-4 py-2 rounded-md bg-gray-200 bg-opacity-40 hover:bg-gray-200 `}
            >
              {item.title}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
