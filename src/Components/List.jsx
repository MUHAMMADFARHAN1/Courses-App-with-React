import React from "react";
import Course_tab from "./Course_tab";
import data from "./../data";

function List() {
  return (
    <div className="flex justify-between flex-col w-4/5 mx-auto mt-14 bg-white px-14 py-4 rounded gap-10">
      <Course_tab className={data[0].name} />
      <Course_tab className={data[1].name} />
      <Course_tab className={data[2].name} />
      <Course_tab className={data[3].name} />
      <Course_tab className={data[4].name} />
      <Course_tab className={data[5].name} />
      <Course_tab className={data[6].name} />
    </div>
  );
}

export default List;
