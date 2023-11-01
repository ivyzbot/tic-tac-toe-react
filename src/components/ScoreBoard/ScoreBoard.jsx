import "./ScoreBoard.css";

export default function ScoreBoard({ scores }) {
  return (
    <div className="scoreboard">
      <ul className="scoreboard">
        <li className="PURPLE">
          Batman: <span>{scores["1"]}</span>
        </li>
        <li className="ORANGE">
          Joker: <span>{scores["-1"]}</span>
        </li>
        <li className="Tie">
          Tie: <span>{scores.tie}</span>
        </li>
      </ul>
    </div>
  );
}
