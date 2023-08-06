import React from "react";

function Header({gameState, currentPlayer, winPlayer}){
    function renderLabel(){
        switch(gameState){
            case 1:
                return <div>Player { currentPlayer } Turn</div>

            case 2:
                return <div>Player { winPlayer } Won</div>

            case 3:
                return <div>Match Draw</div>

        }
    }
    return(
        <div className="panel header">
            <div className="text">{renderLabel()}</div>
        </div>
    )
}
export default Header;