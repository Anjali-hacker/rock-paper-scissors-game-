
console.log("Game Start!");
 
let humanScore = 0;
let computerScore = 0;


// computer choice
function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) return "rock";
    if (random === 1) return "paper";
    return "scissors";
}

// human choice
function getHumanChoice() {
    let choice = prompt("Enter rock, paper or scissors");

     console.log("User entered:", choice);

    if (!choice) {
        console.log("No input given!");
        return "rock";
    }

       return choice.toLowerCase().trim(); //
}

// play one round
function playRound(human, computer) {

    if (human === computer) {
        console.log("Draw");
    }

    else if (
        (human === "rock" && computer === "scissors") ||
        (human === "paper" && computer === "rock") ||
        (human === "scissors" && computer === "paper")
    ) {
        humanScore++;
        console.log("You win!");
    }

    else {
        computerScore++;
        console.log("You lose!");
    }

    console.log("Score:", humanScore, computerScore);
}

// play full game
function playGame() {

    for (let i = 1; i <= 5; i++) {
         console.log("---- Round", i, "----");
        let human = getHumanChoice();
        let computer = getComputerChoice();

        playRound(human, computer);
    }

    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (humanScore < computerScore) {
        console.log("Computer won the game!");
    } else {
        console.log("It's a tie!");
    }
}

playGame();

debugger;
