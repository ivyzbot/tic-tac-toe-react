import "./Turn.css";

export default function Turn({ states }) {
  const { winner, turn, color } = states;
  const currentColor = color[turn].toUpperCase();
  const currentWinner = color[winner].toUpperCase();

  let msg;
  if (!winner) {
    msg = (
      <h1 id="turn-msg">
        <span className={currentColor}>{currentColor}</span>
        {"'s Turn"}
      </h1>
    );
  } else if (winner === "T") {
    msg = <h1 id="turn-msg">{"It's a tie!!!"}</h1>;
  } else {
    msg = (
      <h1 id="turn-msg">
        {"Congrates "}
        <span className={currentWinner}>{currentWinner}</span>
        {"! You won!"}
      </h1>
    );
  }
  return <>{msg}</>;
}
