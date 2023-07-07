const fields=document.querySelectorAll(".board>div")
const gameBoard =(()=>{
    const board=["",null,null,null,null,null,null,null,null];
    return{
        board
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
    const oneTurn=()=>{
        fields.forEach(field=>{field.addEventListener("click",(e)=>{
            if (field.innerHTML!=0){
                return
            }
            gameBoard.board.splice(e.target.id,1,currentPlayer.marker)
            fillBoard()
            switchPlayer()
        })
    })}
    return{
        oneTurn,
        currentPlayer,
    }
})();

gameController.oneTurn()
const fillBoard=()=>{
    gameBoard.board.forEach((element,index)=>{
        fields[index].innerHTML=element
    })
};
fillBoard()
