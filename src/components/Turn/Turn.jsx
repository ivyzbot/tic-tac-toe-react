import "./Turn.css";

export default function Turn({ states }) {
  const { winner, turn, color } = states;
  const currentColor = color[turn].toUpperCase();
  const currentWinner = color[winner].toUpperCase();

  let msg;
  let player = "";
  if (turn === 1) {
    player = "BATMAN";
  } else if (turn === -1) {
    player = "JOKER";
  }
  if (!winner) {
    msg = (
      <h1 id="turn-msg">
        <span className={currentColor}>{player}</span>
        {"'s Turn"}
      </h1>
    );
  } else if (winner === "T") {
    msg = <h1 id="turn-msg">{"ANOTHER BATTLE!!!"}</h1>;
  } else if (winner === 1) {
    msg = (
      <h1 id="turn-msg" className="PURPLE">
        I'm BATMAN!!!
      </h1>
    );
  } else if (winner === -1) {
    msg = (
      <h1 id="turn-msg" className="ORANGE">
        Why so serious?
      </h1>
    );
  }
  return <>{msg}</>;
}
