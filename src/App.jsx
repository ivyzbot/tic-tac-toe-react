import { useEffect, useState } from "react";

import Replay from "./components/Replay/Replay";
import Board from "./components/Board/Board";
import Turn from "./components/Turn/Turn";

import { color, winningCombos } from "./assets/consts";
import "./App.css";

function App() {
  const [squares, setSquares] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const [turn, setTurn] = useState(1);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    setWinner(checkWinner());
  }, [squares]);

  function checkWinner() {
    for (let combo of winningCombos) {
      if (
        Math.abs(squares[combo[0]] + squares[combo[1]] + squares[combo[2]]) ===
        3
      ) {
        return squares[combo[0]];
      }
    }

    if (squares.includes(null)) {
      return null;
    } else {
      return "T";
    }
  }

  return (
    <>
      <Turn states={{ winner: winner, turn: turn, color: color }} />
      <Board
        states={{ winner: winner, squares: squares, turn: turn, color: color }}
        functions={{
          checkWinner: checkWinner,
          setWinner: setWinner,
          setSquares: setSquares,
          setTurn: setTurn,
        }}
      />
      <Replay
        functions={{
          setTurn: setTurn,
          setSquares: setSquares,
          setWinner: setWinner,
        }}
      />
    </>
  );
}

export default App;
