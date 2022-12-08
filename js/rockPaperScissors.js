function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  let choice = choices[getRandomInt(3)];

  return choice;
}
