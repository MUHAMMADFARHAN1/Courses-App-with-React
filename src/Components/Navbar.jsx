import React from "react";
import List from "./List";

function Navbar() {
  return (
    <div className=" flex justify-between flex-row w-4/5 mx-auto mt-14 bg-white px-14 py-4 rounded">
      <button className="bg-gray-300 rounded p-2">Home </button>
      <button className="bg-gray-300 rounded p-2">About us</button>
    </div>
  );
}

export default Navbar;
