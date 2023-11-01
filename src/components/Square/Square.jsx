import "./Square.css";

export default function Sqaure({ id, sqaureColor, taken }) {
  let imgSrc = "";
  if (taken === 1) {
    imgSrc = "/images/batman.png";
  }
  if (taken === -1) {
    imgSrc = "/images/joker.png";
  }
  return (
    <div
      id={id}
      key={id}
      style={{ backgroundColor: sqaureColor }}
      className={taken ? null : "blank-box"}
    >
      <img src={imgSrc} />
    </div>
  );
}
