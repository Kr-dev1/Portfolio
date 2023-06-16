import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  const activeStyling = {
    borderBottomStyle: "solid",
    borderBottomWidth: "3.1px",
    width: "fit-content",
  };

  return (
    <>
      <div className="text-white flex justify-center items-center md:mt-10 sticky">
        <div className="flex justify-center gap-10 py-10 md:px-10 rounded-3xl w-[50%] md:w-[30%]">
          <NavLink
            end
            to="/"
            style={({ isActive }) => (isActive ? activeStyling : null)}
          >
            <p className="drop-shadow-nav">Home</p>
          </NavLink>
          <NavLink
            to="/projects"
            style={({ isActive }) => (isActive ? activeStyling : null)}
          >
            <p className="drop-shadow-nav">Projects</p>
          </NavLink>
          <NavLink
            to="/contact"
            style={({ isActive }) => (isActive ? activeStyling : null)}
          >
            <p className="drop-shadow-nav">Contact</p>
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
