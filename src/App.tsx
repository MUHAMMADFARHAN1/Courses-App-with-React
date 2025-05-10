import { useState } from "react";
import "./App.css";
import Home_Page from "./Components/Home_Page";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import NoPage from "./Components/NoPage";
import Course_Home from "./Components/Course_Home";
import { Link, NavLink, Route, Routes } from "react-router";

//Modes are all decided on the top level so they donot necessarily need a context or state maintanence

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home_Page />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoPage />} />
          <Route path="course/:id" element={<Course_Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
