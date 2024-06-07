import React from "react";
import { useState } from "react";
const Player = ({name,symbol}) => {
    const [isEditing,setIsEditing] = useState(false);
    function handlEditClick(){
        setIsEditing(true)
    }
    function toFalse(){
        setIsEditing(false)
    }
  return (
    <li>
      <span id="player">
        {isEditing ? (
            <span><input type="text" required/></span>
        ) : (
       <> <span className="player-name">{name}</span>
        <span className="player-symbol">{symbol}</span></>
    )}
        
      </span>
      <button onClick={!isEditing?handlEditClick:toFalse}>Edit</button>
    </li>
  );
};

export default Player;
