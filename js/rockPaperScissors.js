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
          return "You win! Rock beats Scissors.";
        default:
          return "Wrong input!";
      }
    case "Paper":
      switch (computerSelection) {
        case "Rock":
          return "You win! Paper beats Rock.";
        case "Scissors":
          return "You lose! Scissors beats Paper.";
        default:
          return "Wrong input!";
      }
    case "Scissors":
      switch (computerSelection) {
        case "Paper":
          return "You win! Scissors beats Paper.";
        case "Rock":
          return "You lose! Rock beats Scissors.";
        default:
          return "Wrong input!";
      }
    default:
      return "Wrong input!";
  }
}

function game() {
  let playerWins = 0;
  let computerWins = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(
      "What do you choose? Rock, Paper or Scissors?"
    );
    const computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);

    while (result === "Wrong input!") {
      playerSelection = prompt("Wrong input! Rock, Paper or Scissors?");
      result = playRound(playerSelection, computerSelection);
    }

    if (result.slice(4, 7) === "win") {
      playerWins++;
    } else if (result.slice(4, 8) === "lose") {
      computerWins++;
    }
  }

  if (playerWins > computerWins) {
    return `You win! You: ${playerWins} | PC: ${computerWins}`;
  } else if (playerWins < computerWins) {
    return `You lose! You: ${playerWins} | PC: ${computerWins}`;
  } else {
    return `Tie! You: ${playerWins} | PC: ${computerWins}`;
  }
}