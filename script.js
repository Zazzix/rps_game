const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
const reset = document.querySelector(".reset")
const hudText = document.querySelector(".round-result")
const playerScore = document.querySelector(".player-score")
const computerScore = document.querySelector(".computer-score")
const currentPlayerScore = document.querySelector(".current-score")
const currentPcScore = document.querySelector(".pc-score")
let humanScore = 0;
let pcScore = 0;



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



rock.addEventListener('click', () => {
    playGame('rock')
})

paper.addEventListener('click', () => {
    playGame('paper')
})

scissors.addEventListener('click', () => {
    playGame('scissors')
})

reset.addEventListener('click', () => {
    hudText.textContent = "Choose: Rock, Paper, Scissors.";
    humanScore = 0;
    pcScore = 0;
    currentPlayerScore.textContent = humanScore;
    currentPcScore.textContent = pcScore;
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
})




function playGame(humanSelection) {
    const computerSelection = getComputerChoice();


    if (humanSelection === 'rock' && computerSelection === 'scissors') {
        humanScore += 1;
        currentPlayerScore.textContent = humanScore;
        hudText.textContent = "You win!";
    } else if (humanSelection === 'scissors' && computerSelection === 'paper') {
        humanScore += 1;
        currentPlayerScore.textContent = humanScore;
        hudText.textContent = "You win!";
    } else if (humanSelection === 'paper' && computerSelection === 'rock') {
        humanScore += 1;
        currentPlayerScore.textContent = humanScore;
        hudText.textContent = "You win!";
    } else if (humanSelection === computerSelection) {
        hudText.textContent = "It's a tie!";
    } else {
        pcScore += 1;
        currentPcScore.textContent = pcScore;
        hudText.textContent = "You loose!";
    }


    if (humanScore == 5) {
        hudText.textContent = "You are the winner!";
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    } else if (pcScore == 5) {
        hudText.textContent = "PC is the winner!";
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
}
