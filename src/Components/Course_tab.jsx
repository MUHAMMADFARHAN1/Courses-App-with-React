import React from "react";

function Course_tab(props) {
  return (
    <div className="flex flex-row justify-between bg-gray-100 p-4 rounded">
      <p>{props.className}</p>
      {/* <p>Registered</p> */}
      <button className="bg-gray-300 rounded px-2 py-1">Registered</button>
    </div>
  );
}

export default Course_tab;
