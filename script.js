let computerChoice = ["Rock", "Paper", "Scissor"];

function getComputerChoice() {
    let randomizer = Math.floor(Math.random() * 3);
    return computerChoice[randomizer];
}

console.log(getComputerChoice());