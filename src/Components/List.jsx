import React from "react";
import Course_tab from "./Course_tab";

function List() {
  return (
    <div className="flex justify-between flex-col w-4/5 mx-auto mt-14 bg-white px-14 py-4 rounded ">
      <Course_tab />
    </div>
  );
}

export default List;
