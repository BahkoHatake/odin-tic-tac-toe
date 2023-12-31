
const gameBoard =(()=>{
    const board=["","","","","","","","",""];
    const fillBoard=()=>{
        gameBoard.board.forEach((element,index)=>{
            displayController.fields[index].innerHTML=element
        })
    };
    const resetBoard=()=>{  
        for(let i=0;i<9;i++){
            board.splice(i,1,"")
        }
        fillBoard()
    }
    return{
        fillBoard,
        board,
        resetBoard
    }
})();

const Player=(name,marker)=>{
    return{name,marker}
}
const player1=Player("Branko","O");
const player2=Player("Djole","X");

const gameController=(()=>{
    let currentPlayer=player1;
    const switchPlayer=()=>{
        if (currentPlayer==player1){currentPlayer=player2}
        else if (currentPlayer==player2){currentPlayer=player1}
    }
    const endGame=(winTie)=>{
        if (winTie==1){console.log(`The WINNER is ${currentPlayer.name}`)}
        else if(winTie==2){console.log("it is a TIE!!")}
    }
    const checkIfGameOver=()=>{
        if (gameBoard.board[0]==gameBoard.board[1]&&gameBoard.board[0]==gameBoard.board[2]&&gameBoard.board[0]!=0){endGame(1)}
        else if (gameBoard.board[3]==gameBoard.board[4]&&gameBoard.board[3]==gameBoard.board[5]&&gameBoard.board[3]!=0){endGame(1)}
        else if (gameBoard.board[6]==gameBoard.board[7]&&gameBoard.board[6]==gameBoard.board[8]&&gameBoard.board[6]!=0){endGame(1)}
        else if (gameBoard.board[0]==gameBoard.board[3]&&gameBoard.board[0]==gameBoard.board[6]&&gameBoard.board[0]!=0){endGame(1)}
        else if (gameBoard.board[1]==gameBoard.board[4]&&gameBoard.board[1]==gameBoard.board[7]&&gameBoard.board[1]!=0){endGame(1)}
        else if (gameBoard.board[2]==gameBoard.board[5]&&gameBoard.board[2]==gameBoard.board[8]&&gameBoard.board[2]!=0){endGame(1)}
        else if (gameBoard.board[0]==gameBoard.board[4]&&gameBoard.board[0]==gameBoard.board[8]&&gameBoard.board[0]!=0){endGame(1)}
        else if (gameBoard.board[6]==gameBoard.board[4]&&gameBoard.board[6]==gameBoard.board[2]&&gameBoard.board[6]!=0){endGame(1)}
        else if (gameBoard.board.includes("")!=true){endGame(2)}
    }
    const oneTurn=(fieldNum)=>{
            if (gameBoard.board[fieldNum]!=0){
                return
            }
            gameBoard.board.splice(fieldNum,1,currentPlayer.marker)
            gameBoard.fillBoard();
            checkIfGameOver();
            switchPlayer();
       }
    return{
        oneTurn,
        currentPlayer,
    }
})();
const displayController=(()=>{
    const fields=document.querySelectorAll(".board>div")
    const name1=document.querySelector(".player-name1")
    const name2=document.querySelector(".player-name2")
    const marker1=document.querySelector(".player-marker1")
    const marker2=document.querySelector(".player-marker2")
    const displayPlayersNames=()=>{
        name1.innerHTML=player1.name;
        name2.innerHTML=player2.name;
    }
    const displayPlayersMarkers=()=>{
        marker1.innerHTML=player1.marker;
        marker2.innerHTML=player2.marker;
    }
    return{
        fields,
        displayPlayersNames,
        displayPlayersMarkers
    }
})()

displayController.displayPlayersNames()
displayController.displayPlayersMarkers()
displayController.fields.forEach(field=>{field.addEventListener("click",()=>{
    gameController.oneTurn(field.id)
})})
