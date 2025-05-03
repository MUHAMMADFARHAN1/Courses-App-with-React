import React from "react";
import Course_tab from "./Course_tab";
import data from "./../data";

import { Link, NavLink, Route, Routes } from "react-router";

function List() {
  return (
    <div className="flex justify-between flex-col w-4/5 mx-auto mt-14 bg-white px-14 py-4 rounded gap-10">
      <Course_tab className={data[0].name} classid={data[0].id} />
      <Course_tab className={data[1].name} classid={data[1].id} />
      <Course_tab className={data[2].name} classid={data[2].id} />
      <Course_tab className={data[3].name} classid={data[3].id} />
      <Course_tab className={data[4].name} classid={data[4].id} />
      <Course_tab className={data[5].name} classid={data[5].id} />
      <Course_tab className={data[6].name} classid={data[6].id} />
    </div>
  );
}

export default List;
