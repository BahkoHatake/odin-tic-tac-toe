const fields=document.querySelectorAll(".board>div")
const gameBoard =(()=>{
    const gameboard=["X","O","X","O","X","O","X","O","X"];
    return{
        gameboard
    }
})();
const Player=(name,marker)=>{
    return{name,marker}
}
const player1=Player("Branko","O");
const player2=Player("Djole","X");

gameController.click()
const fillBoard=()=>{
    gameBoard.gameboard.forEach((element,index)=>{
        console.log(index)
        fields[index].innerHTML=element
    })
};
fillBoard()
