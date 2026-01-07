let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//Called at the start of each round to generate a new target number
function generateTarget() {
  return Math.floor(Math.random() * 10);
}

//Determines winner
function compareGuesses(userGuess, cpuGuess, target) {
  //Gets absolute distance between target and each player's guess
  let userDifference = Math.abs(userGuess - target);
  let cpuDifference = Math.abs(cpuGuess - target);

  if (userDifference <= cpuDifference) {
    return true;
  } else if (cpuDifference < userDifference) {
    return false;
  }
}

//Updates winner's score
function updateScore(winner) {
  if (winner === "human") {
    return (humanScore += 1);
  } else if (winner === "computer") {
    return (computerScore += 1);
  }
}

function advanceRound() {
  return (currentRoundNumber += 1);
}
