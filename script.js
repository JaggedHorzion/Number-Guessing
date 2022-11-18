let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor( (Math.random() * 9) + 1);

}

function compareGuesses(currentHumanGuess, computerGuess, target) {
    if (Math.abs((currentHumanGuess - target)) <= Math.abs((computerGuess - target))) {
    return true
    } else if (Math.abs((currentHumanGuess - target)) === Math.abs((computerGuess - target))) {
    return true 
    } else (Math.abs((currentHumanGuess - target)) >= Math.abs((computerGuess - target))); {
        return false
    }
}

function updateScore(winner) {
     if (winner === 'computer') {
    computerScore += 1
    } else if (winner === 'human'){ 
    humanScore += 1
    }
}

function advanceRound() {
    currentRoundNumber += 1
}

function getAbsoluteDistance(currentHumanGuess, target) {
    return Math.abs(currentHumanGuess - target)

}