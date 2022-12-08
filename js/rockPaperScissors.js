function getRandomInt(max) {
  //returns randomly one of 0, 1,... max-1
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  let choice;

  choice = choices[getRandomInt(3)];

  return choice;
}

function stringNormalize(str) {
  let normalizedStr;

  normalizedStr = str.toLowerCase();
  normalizedStr =
    normalizedStr.slice(0, 1).toUpperCase() + normalizedStr.slice(1);

  return normalizedStr;
}

function playRound(playerSelection, computerSelection) {
  const playerSelectionCI = stringNormalize(playerSelection);

  if (playerSelectionCI === computerSelection) return "Tie!";

  switch (playerSelectionCI) {
    case "Rock":
      switch (computerSelection) {
        case "Paper":
          return "You lose! Paper beats Rock.";
        case "Scissors":
          return "You win! Rock beats Scissors."
      }
    case "Paper":
      switch (computerSelection) {
        case "Rock":
          return "You win! Paper beats Rock.";
        case "Scissors":
          return "You lose! Scissors beats Paper."
      }
    case "Scissors":
      switch (computerSelection) {
        case "Paper":
          return "You win! Scissors beats Paper.";
        case "Rock":
          return "You lose! Rock beats Scissors.";
      }
  }
}

