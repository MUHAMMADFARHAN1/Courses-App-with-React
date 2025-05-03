import React from "react";
import List from "./List";

function Navbar() {
  return (
    <div>
      <div className=" flex justify-between flex-row w-4/5 mx-auto mt-14 bg-white px-14 py-4 rounded -mb-10">
        <button className="bg-gray-300 rounded p-2">Home </button>
        <div className="flex justify-between flex-row w-1/5">
          <button className="bg-gray-300 rounded p-2">All</button>
          <button className="bg-gray-300 rounded p-2">Registered</button>
          <button className="bg-gray-300 rounded p-2">About us</button>
        </div>
      </div>
      <List />
    </div>
  );
}

export default Navbar;
