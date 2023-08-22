let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const getAbsoluteDistance = (target, number) => Math.abs(target - number);

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (userGuess, computerGuess, targetNumber) => {
  if (
    Math.abs(userGuess - targetNumber) > Math.abs(computerGuess - targetNumber)
  ) {
    return true;
  }
  if (
    Math.abs(userGuess - targetNumber) < Math.abs(computerGuess - targetNumber)
  ) {
    return false;
  }
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
};

const advanceRound = () => currentRoundNumber++;

/* To confirm that this value increased by 1
updateScore('human');
console.log(humanScore); 

updateScore('computer');
console.log(computerScore); // To confirm that this value increased by 1
*/
