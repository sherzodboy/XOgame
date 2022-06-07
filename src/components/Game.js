import { useState } from "react";
import Board from "./Board";
import Modal from "./Modal";
import { calculateWinner } from "./utils/calculateWinner";

export default function Game() {
  const [cellValues, setCellValues] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [xIsNext, setXIsNext] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const [numberOfTurn, setNumberOfTurn] = useState(9);
  const [winner, setWinner] = useState();
  const [winningCombination, setWinningCombination] = useState([]);

  const winnerCombination = [];
  const isCellEmpty = (cellIndex) => cellValues[cellIndex] === "";

  const onNewgame = () => {
    setCellValues(["", "", "", "", "", "", "", "", ""]);
    setXIsNext(true);
    setIsGameOver(false);
    setNumberOfTurn(9);
    setWinner(undefined);
    setWinningCombination([]);
  };

  const cellClicked = (cellIndex) => {
    if (isCellEmpty(cellIndex)) {
      const newCellVal = [...cellValues];
      newCellVal[cellIndex] = xIsNext ? "X" : "0";

      const newNumberOfTurn = numberOfTurn - 1;

      const calcResult = calculateWinner(
        newCellVal,
        newNumberOfTurn,
        cellIndex
      );

      setCellValues(newCellVal);
      setXIsNext(!xIsNext);
      setIsGameOver(calcResult.hasResult);
      setNumberOfTurn(newNumberOfTurn);
      setWinner(calcResult.winner);
      setWinningCombination(calcResult.winningCombination);
    }
  };

  return (
    <>
      <div id="game">
        <h1>The Best Game For Waste Time</h1>
        <Board
          cellValues={cellValues}
          winnerCombination={winnerCombination}
          cellClicked={cellClicked}
        />
      </div>
      <Modal isGameOver={isGameOver} winner={winner} onNewgame={onNewgame} />
    </>
  );
}
