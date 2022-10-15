function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let computerSelection = options[Math.floor(Math.random() * options.length)];
    return computerSelection;

}

function getPlayerChoice(){
    let playerSelection = prompt("Rock, paper, or scissors? ").toLowerCase();
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return "Draw";
        } else if (computerSelection == "paper"){
            return "Computer";
        }
        return "Player";
    } else if (playerSelection == "scissors"){
        if (computerSelection == "rock") {
            return "Computer";
        } else if (computerSelection == "paper"){
            return "Player";
        }
        return "Draw";
    } else {
        if (computerSelection == "rock") {
            return "Player";
        } else if (computerSelection == "paper"){
            return "Draw";
        }
        return "Computer";
    }   
}

function game(){
    const count = [];
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        count.push(playRound(playerSelection, computerSelection));
    }
    let playerCount = 0;
    let computerCount = 0;
    count.forEach(element => {
        if (element === "Player"){
            playerCount += 1;
        }
        else if (element === "Computer"){
            computerCount += 1;
        }
    });
    if (playerCount === computerCount){
        console.log("It's a draw")
    }
    else if (playerCount > computerCount){
        console.log("Player wins with " + playerCount);
    } else {
        console.log("Computer wins with " + computerCount)
    }
}



