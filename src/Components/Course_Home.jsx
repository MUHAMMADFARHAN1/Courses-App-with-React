import React from "react";
import { useLocation, useParams } from "react-router";
import Navbar from "./Navbar";
import data from "./../data";

// Simulating backend request
function fetchArticle(slug) {
  return data.find((item) => item.slug == slug);
}

function Course_Home() {
  let { id } = useParams();
  //   console.log(id, language);

  //   const article = fetchArticle(id);
  return (
    <div>
      <Navbar />
      <div className="w-4/5 mx-auto mt-14 bg-white px-14 py-4 rounded">
        <h1 className="text-2xl">{data[id].name}</h1>
        <p className="text-gray-500">{data[id].description}</p>
      </div>
    </div>
  );
}

export default Course_Home;
