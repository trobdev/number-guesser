let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}
const getAbsoluteDistance = (first, second) => {
    return Math.abs(first - second);
}
const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    let humanDifference = getAbsoluteDistance(humanGuess, targetNumber);
    let computerDifference = getAbsoluteDistance(computerGuess, targetNumber);
    if (humanDifference == computerDifference) {
        return true;
    } else if (humanDifference > computerDifference) {
        return false;
    } else if (humanDifference < computerDifference) {
        return true;
    }
}

const updateScore = winner => {
    if (winner === 'computer') {
        computerScore++;
    } else if (winner === 'human') {
        humanScore++;
    }
}

const advanceRound = () => currentRoundNumber++;