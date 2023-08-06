export const GameStatus = (gameBoard, currentMove, currentPlayer) => {
    gameBoard[currentMove] = currentPlayer;
    
    const winTabs = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    for(let i=0; i<winTabs.length; i++){
        const [c1, c2, c3] = winTabs[i];

        if(gameBoard[c1]  > 0 &&
            gameBoard[c1] === gameBoard[c2] &&
            gameBoard[c2] === gameBoard[c3 ])
            {
                return 2;
            }
    }
    for(let j=0; j<gameBoard.length; j++){
        if(gameBoard[j]===0) return 1;
    }
    return 3;
    
}