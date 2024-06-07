import React from "react";
import { useState } from "react";
const Player = ({name,symbol}) => {
    const [isEditing,setIsEditing] = useState(false);
    function handlEditClick(){
        setIsEditing((editing)=>!editing)
    }
   
    let buttonCaption = 'Edit';
    if(isEditing){
        buttonCaption = 'Save'
    }
  return (
    <li>
      <span className="player">
        {isEditing ? (
            <span><input type="text" required value={name}/></span>
        ) : (
       <> <span className="player-name">{name}</span>
      </>
    )}
          <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handlEditClick}>{buttonCaption}</button>
    </li>
  );
};

export default Player;
