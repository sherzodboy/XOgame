import classNames from "classnames";

export default function Modal(props) {
  const modalClasses = classNames({
    "modal-open": props.isGameOver,
  });

  const msg = props.winner ? `ًWinner is ${props.winner} ` : "It is a tie";

  return (
    <div id="modal-overlay" className={modalClasses}>
      <div id="game-result-modal">
        <div id="result-container">
          <div id="winner-container">
            <span>{msg}</span>
          </div>
        </div>
        <div id="new-game-container">
          <button id="new-game-button" onClick={props.onNewgame}>
            Start New Game
          </button>
        </div>
      </div>
    </div>
  );
}
