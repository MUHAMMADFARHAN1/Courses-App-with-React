import React from "react";
import { Link, NavLink, Route, Routes } from "react-router";

function Course_tab(props) {
  return (
    <div className="flex flex-row justify-between bg-gray-100 dark:bg-amber-500 p-4 rounded">
      <p>{props.className}</p>
      <div className="flex flex-row justify-between bg-gray-100  dark:bg-amber-500 rounded w-1/7">
        <NavLink
          className="bg-gray-300 rounded px-2 py-1"
          to={`course/${props.classid}`}
        >
          Details
        </NavLink>
        <button className="bg-gray-300 rounded px-2 py-1">Registered</button>
      </div>
    </div>
  );
}

export default Course_tab;
