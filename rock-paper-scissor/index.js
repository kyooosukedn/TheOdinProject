function getComputerChoice() {
  //random
  //return "Rocck, paper, or scissor"
  const choices = ["rock", "paper", "scissor"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playerWins(playerSelection, computerSelection) {
  if ((playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissor")
    || (playerSelection.toLowerCase() === "scissor" && computerSelection.toLowerCase() === "paper")
    || (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock")) {
    return true;
  }

  return false;
}

function playRound(playerSelection, computerSelection) {
  if (playerWins(playerSelection, computerSelection)) {
    return "Player wins!";
  } else if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else {
    return "Computer wins!";
  }

}


function game() {
  //5 ROUNDS
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Select your choice: Rock, paper, or scissor");
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.includes("Player")) {
      playerScore++;
    } else if (result.includes("Computer")) {
      computerScore++;
    }
  }
  if (playerScore > computerScore) {
    console.log("Player wins!");
  } else if (computerScore > playerScore) {
    console.log("Computer wins!");
  } else {
    console.log("It's a tie!");
  }

}

game();
