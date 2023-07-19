const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceButtons = document.querySelectorAll(".choiceBtn");

let player;
let computer;
let result;

choiceButtons.forEach(button => button.addEventListener("click",()=>{

    player = button.textContent;

    computerTurn();

    playerText.textContent = `player : ${player}`;
    computerText.textContent = `computer : ${computer}`;
    resultText.textContent = checkWinner();
}));

function computerTurn(){
    const randomNum = Math.floor(Math.random() * 3) + 1;

    switch(randomNum){
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
}

function checkWinner(){
    if(player === computer){
        return "THIS IS DRAW !";
    }
    else if(computer == "ROCK"){
        return (player == "PAPER") ? "YOU WIN !" : "YOU LOSE";
    }
    else if(computer == "PAPER"){
        return (player == "SCISSORS") ? "YOU WIN !" : "YOU LOSE";
    }
    else if(computer == "SCISSORS"){
        return (player == "ROCK") ? "YOU WIN !" : "YOU LOSE";
    }
}