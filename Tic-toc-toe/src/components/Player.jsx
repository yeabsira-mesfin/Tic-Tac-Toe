import React from "react";
import { useState } from "react";
const Player = ({initialName,symbol}) => {
    const [playerName,setPlayerName] = useState(initialName)
    const [isEditing,setIsEditing] = useState(false);
    function handlEditClick(){
        setIsEditing((editing)=>!editing)
    }
    function handleChange(event){
        // console.log(event)
        setPlayerName(event.target.value)
    }
    let buttonCaption = 'Edit';
    if(isEditing){
        buttonCaption = 'Save'
    }
  return (
    <li>
      <span className="player">
        {isEditing ? (
            <span><input type="text" required value={playerName} onChange={handleChange}/></span>
        ) : (
       <> <span className="player-name">{playerName}</span>
      </>
    )}
          <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handlEditClick} >{buttonCaption}</button>
    </li>
  );
};

export default Player;
