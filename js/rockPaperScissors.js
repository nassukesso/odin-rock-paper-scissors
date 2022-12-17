const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
let playerResult = document.querySelector("#player-result");
let computerResult = document.querySelector("#computer-result");
let playerFinalResult = document.querySelector("#player-final-result");
let computerFinalResult = document.querySelector("#computer-final-result");

function getRandomInt(max) {
  // returns randomly one of 0, 1,... max-1
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  let choice;

  choice = choices[getRandomInt(3)];

  return choice;
}

function playRound(playerSelection, computerSelection) {
  if (
    playerFinalResult.innerText === "5" ||
    computerFinalResult.innerText === "5"
  )
    return;

  if (playerSelection === computerSelection) {
    playerResult.innerText = "tie " + playerSelection;
    computerResult.innerText = "tie " + computerSelection;
    return;
  }

  switch (playerSelection) {
    case "Rock":
      switch (computerSelection) {
        case "Paper":
          playerResult.innerText = "0 Rock";
          computerResult.innerText = "1 Paper";
          computerFinalResult.innerText++;
          return;
        case "Scissors":
          playerResult.innerText = "1 Rock";
          computerResult.innerText = "0 Scissors";
          playerFinalResult.innerText++;
          return;
      }
    case "Paper":
      switch (computerSelection) {
        case "Rock":
          playerResult.innerText = "1 Paper";
          computerResult.innerText = "0 Rock";
          playerFinalResult.innerText++;
          return;
        case "Scissors":
          playerResult.innerText = "0 Paper";
          computerResult.innerText = "1 Scissors";
          computerFinalResult.innerText++;
          return;
      }
    case "Scissors":
      switch (computerSelection) {
        case "Paper":
          playerResult.innerText = "1 Scissors";
          computerResult.innerText = "0 Paper";
          playerFinalResult.innerText++;
          return;
        case "Rock":
          playerResult.innerText = "0 Scissors";
          computerResult.innerText = "1 Rock";
          computerFinalResult.innerText++;
          return;
      }
  }
}

rockBtn.addEventListener("click", () => playRound("Rock", getComputerChoice()));
paperBtn.addEventListener("click", () =>
  playRound("Paper", getComputerChoice())
);
scissorsBtn.addEventListener("click", () =>
  playRound("Scissors", getComputerChoice())
);
