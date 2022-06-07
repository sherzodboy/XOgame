import Cell from "./Cell";

export default function Board(props) {
  return (
    <div id="board">
      {props.cellValues.map((value, idx) => {
        const isHighlight =
          props.winnerCombination && props.winnerCombination.indexOf(idx) >= 0;

        return (
          <Cell
            key={idx}
            value={value}
            isHighlight={isHighlight}
            showCase={() => props.cellClicked(idx)}
          />
        );
      })}
    </div>
  );
}
