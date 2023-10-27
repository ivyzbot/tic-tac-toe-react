import "./Replay.css";

export default function Replay({ functions }) {
  const { setTurn, setWinner, setSquares } = functions;
  function restart() {
    setTurn(1);
    setWinner(null);
    setSquares([null, null, null, null, null, null, null, null, null]);
  }
  return (
    <button id="play-again-btn" onClick={restart}>
      PLAY AGAIN
    </button>
  );
}
