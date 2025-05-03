// Keep in mind

// Plan or pseudocode your solution.
// Write the code.
// Test your code to make sure it works.

// declare the players score variables

let humanScore = 0;
let computerScore = 0;

// the logic to get the computer choice

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);

  return choices[randomChoice];
}

// console.log(getComputerChoice());

// the logic to get the human choice

function getHumanChoice() {
  let choice = prompt(
    "Enter your choice between 'Rock' 'Paper' and 'scissors'"
  );

  return choice;
}

// console.log(getHumanChoice());

// the logic to play a round

function playRound(humanChoice, computerChoice) {
  humanChoice = getHumanChoice().toLowerCase(); // Ensure case-insensitivity
  computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    console.log("It's a tie");
    return alert("It's a Tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(
      `You win , ${computerChoice} beats ${humanChoice} : Your Score: ${humanScore} || Computer Score : ${computerScore}`
    );
    return alert(
      `You win , ${humanChoice} beats ${computerChoice} : Your Score : ${humanScore} || Computer Score : ${computerScore}`
    );
  } else {
    computerScore++;
    console.log(
      `You lose , ${computerChoice} beats ${humanChoice} : Computer Score : ${computerChoice} || Your Score: ${humanScore}`
    );
    return alert(
      `You lose , ${computerChoice} beats ${humanChoice} : Computer Score : ${computerChoice} || Your Score: ${humanScore}`
    );
  }
}

// playRound(getHumanChoice, getComputerChoice);

// Logic to play the Entire game
