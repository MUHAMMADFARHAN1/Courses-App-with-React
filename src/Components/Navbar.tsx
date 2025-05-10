import React from "react";
import { useState } from "react";
import List from "./List";
import { Link, NavLink, Route, Routes } from "react-router";
// import { Button } from "./ui/button";
import { Button } from "@/components/ui/button";
//Modes are all decided on the top level so they donot necessarily need a context or state maintanence

function Navbar() {
  const [isDark, setIsDark] = useState(true);

  function toggleMode(value) {
    setIsDark(value);
    document.getElementById("root").classList.toggle("dark");
  }

  return (
    <div>
      <div className=" flex justify-between flex-row w-4/5 mx-auto mt-14 bg-white dark:bg-gray-100 px-14 py-4 rounded -mb-10 gap-2">
        <Button size="icon" className="bg-white text-black">
          Home
        </Button>
        <div className="flex justify-between flex-row xl:w-1/5 gap-2">
          <Button size="icon" className="bg-white text-black">
            All
          </Button>
          <button className="bg-gray-300 dark:bg-white rounded p-2">
            Registered
          </button>
          <NavLink
            className="bg-gray-300 dark:bg-white rounded p-2"
            to="/about"
          >
            About us
          </NavLink>
          {isDark ? (
            <Button
              size="icon"
              className="bg-white text-black"
              onClick={() => toggleMode(false)}
            >
              Dark
            </Button>
          ) : (
            <Button
              size="icon"
              className="bg-white text-black"
              onClick={() => toggleMode(true)}
            >
              Light
            </Button>
          )}
        </div>
      </div>
      {/* <List /> */}
    </div>
  );
}

export default Navbar;
