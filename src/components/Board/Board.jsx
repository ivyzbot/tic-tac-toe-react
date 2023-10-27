import "./Board.css";
import Sqaure from "../Square/Square";

export default function Board({ states, functions }) {
  const { squares, turn, winner, color } = states;
  const { checkWinner, setWinner, setSquares, setTurn } = functions;

  const currentColor = color[turn];

  let boardComponent = [];
  for (let i = 0; i < 9; i++) {
    boardComponent.push(
      <Sqaure
        id={i}
        key={i}
        sqaureColor={color[squares[i]]}
        taken={squares[i]}
      />
    );
  }

  function clickSqaure(evt) {
    // console.log(evt.target.id);
    const idclicked = parseInt(evt.target.id);
    if (squares[idclicked] || winner) {
    } else {
      const sqauresTemp = [...squares];
      sqauresTemp[idclicked] = turn;
      setSquares(sqauresTemp);
      setTurn(-1 * turn);
      // setWinner(checkWinner());
    }
  }
  return (
    <main id="board" onClick={clickSqaure}>
      {boardComponent}
    </main>
  );
}
