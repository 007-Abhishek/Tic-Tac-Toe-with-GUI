import React,{useState} from "react";
import Tabs from './Tabs';
import './Style.css';
import Header from './Header';
import Footer from './Footer';
import { GameStatus } from "./GameStatus";

const no_player=0;
const player_1=1;
const player_2=2;

const Game_State_Playing=1;
const Game_State_Win=2;
const Game_State_Draw=3;

function GameBoard(){
    const [gameBoard, setGameBoard] = useState(Array(9).fill(no_player));
    const [currentPlayer, setCurrentPlayer] = useState(player_1);
    const [gameState, setGameState] = useState(Game_State_Playing);
    const [winPlayer, setWinPlayer] = useState(no_player)

    function tabClicked(id){

        if(gameBoard[id]!==no_player) return;
        if(gameState !== 1) return;

        if(GameStatus(gameBoard, id, currentPlayer)=== 2 ){
            setGameState(Game_State_Win);
            setWinPlayer(currentPlayer);
        }

        if(GameStatus(gameBoard, id, currentPlayer)=== 3 ){
            setGameState(Game_State_Draw);
        }

        gameBoard[id] = currentPlayer;
        setGameBoard(gameBoard);

        setCurrentPlayer(currentPlayer === player_1 ? player_2 : player_1);
        
    }

    function newGameClicked() {
        window.location.reload(false);
      }

    function renderCircle(id){
        return <Tabs id={id} className={`player_${gameBoard[id]}`} onTabClicked={tabClicked}/>
    }
    return(
        <div>
            <Header gameState={gameState} currentPlayer={currentPlayer} winPlayer={winPlayer}/>
            <div className="board">
                {renderCircle(0)}
                {renderCircle(1)}
                {renderCircle(2)}
                {renderCircle(3)}
                {renderCircle(4)}
                {renderCircle(5)}
                {renderCircle(6)}
                {renderCircle(7)}
                {renderCircle(8)}
            </div>
            <Footer newGame={newGameClicked}/>
        </div>
    ) 
}
export default GameBoard;