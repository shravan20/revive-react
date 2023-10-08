import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const getName = (name) => {
  return name;
};

function App() {
  return (
    <>
      <p>Hello, {getName("Shravan")}!</p>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </>
  );
}

export default App;
