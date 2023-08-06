import React from "react";

function Footer({newGame}){
    return(
        <div className="panel footer">
            <button onClick={()=>newGame()}>New Game</button>
        </div>
    )
}
export default Footer;