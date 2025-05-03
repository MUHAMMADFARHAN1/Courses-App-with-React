import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home_Page from "./Components/Home_Page";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home_Page />
    </>
  );
}

export default App;
