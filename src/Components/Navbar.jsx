import React from "react";
import { useState } from "react";
import List from "./List";
import { Link, NavLink, Route, Routes } from "react-router";

function Navbar() {
  const [isDark, setIsDark] = useState(true);

  function toggleMode(value) {
    setIsDark(value);
    document.getElementById("root").classList.toggle("dark");
  }

  return (
    <div>
      <div className=" flex justify-between flex-row w-4/5 mx-auto mt-14 bg-white px-14 py-4 rounded -mb-10">
        <NavLink className="bg-gray-300 rounded p-2" to="/">
          Home
        </NavLink>
        <div className="flex justify-between flex-row w-1/5">
          <button className="bg-gray-300 rounded p-2">All</button>
          <button className="bg-gray-300 rounded p-2">Registered</button>
          <NavLink className="bg-gray-300 rounded p-2" to="/about">
            About us
          </NavLink>
          {isDark ? (
            <button
              className="bg-gray-300 rounded p-2"
              onClick={() => toggleMode(false)}
            >
              Dark
            </button>
          ) : (
            <button
              className="bg-white  rounded p-2"
              onClick={() => toggleMode(true)}
            >
              Light
            </button>
          )}
        </div>
      </div>
      {/* <List /> */}
    </div>
  );
}

export default Navbar;
