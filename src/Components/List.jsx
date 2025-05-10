import React from "react";
import Course_tab from "./Course_tab";
// import data from "./../data";

import { fetchProducts } from "../api/courses";
import { useQuery } from "@tanstack/react-query";

import { Link, NavLink, Route, Routes } from "react-router";

function List() {
  const { isPending, error, data } = useQuery({
    queryKey: ["subjects"],
    queryFn: fetchProducts,
    // Everytime the user change window and goes back, data will be refetched
    refetchOnWindowFocus: true,
    // Retry everytime fetching fails for a maximum of 3 retries
    retry: 3,
    // Disabling cache
    gcTime: 0,
  });

  // if (isPending) {
  //   return <p className="text-2xl">Loading Products...</p>;
  // }
  // else if (error)
  //   return <p className="text-2xl text-red-600">{error.message}</p>;

  // console.log(data);

  //render everything in jsx
  // let listItems = data.map((item) => (
  //   <Course_tab className={item.name} classid={item.id} />
  // ));
  // let listItems = data.map((item) => (
  //   <Course_tab className={item.name} classid={item.id} />
  // ));

  return (
    <div className="flex justify-between flex-col w-4/5 mx-auto mt-14 dark:bg-gray-100  bg-white px-14 py-4 rounded gap-10 mb-14">
      {/* <Course_tab className={data[0].name} classid={data[0].id} />
      <Course_tab className={data[1].name} classid={data[1].id} />
      <Course_tab className={data[2].name} classid={data[2].id} />
      <Course_tab className={data[3].name} classid={data[3].id} />
      <Course_tab className={data[4].name} classid={data[4].id} />
      <Course_tab className={data[5].name} classid={data[5].id} />
      <Course_tab className={data[6].name} classid={data[6].id} /> */}

      {/* {isPending && "Loading..."}  and operator for single condition*/}

      {isPending
        ? "Loading..."
        : data.map((item) => (
            <Course_tab className={item.name} classid={item.id} />
          ))}

      {/* {listItems} */}
    </div>
  );
}

// let listItems = data.map((item) => (
//   <Flexcard className={data[0].name} classid={data[0].id} />
// ));

export default List;
