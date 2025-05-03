import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home_Page from "./Components/Home_Page";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import NoPage from "./Components/NoPage";
import { Link, NavLink, Route, Routes } from "react-router";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/">
          <Route index element={<Home_Page />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
