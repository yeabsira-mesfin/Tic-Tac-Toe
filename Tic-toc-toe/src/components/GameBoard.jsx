import { React } from "react";

const GameBoard = ({ onSelecetSquare, board }) => {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymobl, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelecetSquare(rowIndex, colIndex)}
                  disabled={playerSymobl !== null}
                >
                  {playerSymobl}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
