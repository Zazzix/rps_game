function getComputerChoice() {
    let number = Math.ceil(Math.random() * 3)
    
    if (number === 1) {
        return 'rock';
    } else if (number === 2) {
        return 'paper'
    } else if (number === 3) {
        return 'scissors'
    }
}

console.log(getComputerChoice());
