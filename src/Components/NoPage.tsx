import React from "react";
import Navbar from "./Navbar";

function NoPage() {
  return (
    <div>
      <Navbar />
      <p className="w-4/5 mx-auto mt-14 bg-white px-14 py-4 rounded g">
        404 Page not found
      </p>
    </div>
  );
}

export default NoPage;
