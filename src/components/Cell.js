import classNames from "classnames";

export default function Cell(props) {
  const cellClasses = classNames({
    cell: true,
    winner: props.isHighlight,
  });

  const cellContentClasses = classNames({
    "cell-content": true,
    populated: props.value,
  });

  return (
    <button className={cellClasses} onClick={props.showCase}>
      <span className={cellContentClasses}>{props.value}</span>
    </button>
  );
}
