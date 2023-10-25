import { useState } from "react";

import Replay from "./components/Replay/Replay";
import Board from "./components/Board/Board";
import Turn from "./components/Turn/Turn";

import "./App.css";

function App() {
  return (
    <>
      <Turn />

      <Board />
      <Replay />
    </>
  );
}

export default App;
