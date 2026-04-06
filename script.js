console.log("Game Start!");
 
//  to get computer's choice
function getComputerChoice() {
    let random = Math.floor(Math.random() *3);
    if (random === 0)  return "rock";
    if (random === 1)  return "paper";
    return "scissors";
}
    console.log(getComputerChoice());

    // to get user's choice 

    function getHumanChoice() {
        let choice = prompt("Enter rock , paper or scissors"); 
        return choice.toLowerCase();
    }
    console.log(getHumanChoice());

    let HumanScore = 0;
    let ComputerScore = 0;

    function playRound(human , computer) {
        if (human === computer) {
            console.log("Draw");
        }
        else if ((human === "rock" && computer === "scissors") || (human === "paper" && computer === "rock") || (human === "scissors" && computer === "paper")) {
            console.log("You wins!");
            HumanScore++;
        }
        else {
            console.log("You lose!");
            ComputerScore++;
        }
    }
        console.log("Score:", HumanScore, ComputerScore);

        function playGame() {

  for (let i = 1; i <= 5; i++) {

    let human = getHumanChoice();
    let computer = getComputerChoice();

        playRound(human, computer);
      
  }

  if (HumanScore > ComputerScore) {
    console.log("You won the game!");
  } else if (HumanScore < ComputerScore) {
    console.log("Computer won the game!");
  } else {
    console.log("It's a tie!");
  }
}

playGame();