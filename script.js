let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let number = Math.ceil(Math.random() * 3)

    if (number === 1) {
        return 'rock';
    } else if (number === 2) {
        return 'paper';
    } else if (number === 3) {
        return 'scissors';
    }
}

function getHumanChoice() {
    const input = prompt('Choose: Rock, Paper, Scissors').toLowerCase();

    return input;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore += 1;
        return `You win! ${humanChoice} beats ${computerChoice}. Score: You - ${humanScore}, PC - ${computerScore}`;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore += 1;
        return `You win! ${humanChoice} beats ${computerChoice}. Score: You - ${humanScore}, PC - ${computerScore}`;
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore += 1;
        return `You win! ${humanChoice} beats ${computerChoice}. Score: You - ${humanScore}, PC - ${computerScore}`;
    } else if (humanChoice === computerChoice) {
        return `It's a tie! ${humanChoice}  can't beat ${computerChoice}. Score: You - ${humanScore}, PC - ${computerScore}`;
    } else {
        computerScore += 1;
        return `You loose! ${computerChoice} beats ${humanChoice}. Score: You - ${humanScore}, PC - ${computerScore}`;
    }
}

console.log(playRound(getHumanChoice(), getComputerChoice()))


