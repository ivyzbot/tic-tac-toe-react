import { useEffect, useState } from "react";

import Replay from "./components/Replay/Replay";
import Board from "./components/Board/Board";
import Turn from "./components/Turn/Turn";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";

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
  const [scores, setScores] = useState({ 1: 0, "-1": 0, tie: 0 });

  useEffect(() => {
    setWinner(checkWinner());
  }, [squares]);

  function checkWinner() {
    for (let combo of winningCombos) {
      if (
        Math.abs(squares[combo[0]] + squares[combo[1]] + squares[combo[2]]) ===
        3
      ) {
        const winner = squares[combo[0]];
        const newScores = { ...scores, [winner]: scores[winner] + 1 };
        setScores(newScores);
        return winner;
      }
    }

    if (squares.includes(null)) {
      return null;
    } else {
      const newScores = { ...scores, tie: scores.tie + 1 };
      setScores(newScores);
      return "T";
    }
  }
  console.log(scores);
  return (
    <>
      <Turn states={{ winner: winner, turn: turn, color: color }} />
      <ScoreBoard scores={scores} />
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
