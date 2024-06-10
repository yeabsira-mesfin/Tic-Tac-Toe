import Player from "./components/Player";
import { useState } from "react";
import GameBoard from "./components/GameBoard";
function App() {
const [activePlayer, setAcitvePlayer] = useState('X');

function handleSelectSquare(){
  setAcitvePlayer((curActviePlayer)=> curActviePlayer === 'X'? 'O':'X')
}
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName='Player-1' symbol='X' isActive={activePlayer === 'X'}/>
          <Player initialName='Player-2' symbol='O' isActive={activePlayer === 'O'}/>
          
        </ol>
        <GameBoard onSelecetSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
    </main>
  );
}

export default App;
