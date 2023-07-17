let player;
let computer;
let choice = ["rock", "paper", "scissors"];

function computerChoice() {
    computer = choice[Math.floor( Math.random() * 3 )];
    document.getElementById("computerChoice").classList.add(computer);
}
function playerChoice() {
    document.getElementById("playerChoice").classList.add(player);
}
function removeChoice() {
    document.getElementById("computerChoice").classList.remove(computer);
    document.getElementById("playerChoice").classList.remove(player);
}

const play = (index) => {
    removeChoice();
    player = choice[index];
    playerChoice();
    computerChoice();
    winner();
}

document.getElementById("rock").onclick = () =>  play(0);
document.getElementById("paper").onclick = () => play(1);
document.getElementById("scissors").onclick = () => play(2);

function winner() {
    if ( player == computer ) {
        document.getElementById("result").innerHTML = "IT'S A TIE!";
    }
    else if ( player == "rock") {
        ( computer == "scissors" ) ? document.getElementById("result").innerHTML = "YOU WIN!" : document.getElementById("result").innerHTML = "YOU LOSE!";
    } 
    else if ( player == "paper") {
        ( computer == "rock" ) ? document.getElementById("result").innerHTML = "YOU WIN!" : document.getElementById("result").innerHTML = "YOU LOSE!";
    }
    else if ( player == "scissors") {
        ( computer == "paper" ) ? document.getElementById("result").innerHTML = "YOU WIN!" : document.getElementById("result").innerHTML = "YOU LOSE!";
    }
}