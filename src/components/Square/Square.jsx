import "./Square.css";

export default function Sqaure({ id, sqaureColor, taken }) {
  return (
    <div
      id={id}
      key={id}
      style={{ backgroundColor: sqaureColor }}
      className={taken ? null : "blank-box"}
    ></div>
  );
}
