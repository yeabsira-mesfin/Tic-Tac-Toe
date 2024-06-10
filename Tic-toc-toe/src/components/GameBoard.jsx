import {React} from "react";

const intitalGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({onSelecetSquare,turns}) => {
  let gameBoard = intitalGameBoard;
  for(const turn of turns){
    const {square,player} = turn;
    const {row, col} = square;

    gameBoard[row][col] = player;
  }
    // const [gameBoard,setGameBoard] = useState(intitalGameBoard);
    // function handleSelectSquare(rowIndex,colIndex){
    //     setGameBoard((prevGameBoard)=>{
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol
    //         return updatedBoard;
    //     });

    //     onSelecetSquare();
    // } 
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymobl, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=>onSelecetSquare(rowIndex,colIndex)}  disabled ={playerSymobl !== null}>{playerSymobl}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
