let choices = ["rock", "paper", "scissor"];
let playerChoice;
let computerChoice;

let getComputerChoice = () => {
    let randomizer = Math.floor(Math.random() * 3);
    return choices[randomizer];
}

let getPlayerChoice = () => {
    return prompt("Pick your fighter!");
}

playerChoice = getPlayerChoice().toLowerCase();
computerChoice = getComputerChoice();

let oneRound = (playerChoice, computerChoice) => {
    if(playerChoice == "rock" && computerChoice == "rock") {
        return "It's a Tie!"
    } else if(playerChoice == "rock" && computerChoice == "paper") {
        return "You Lose! Paper beats Rock"
    } else if(playerChoice == "rock" && computerChoice == "scissor") {
        return "You Won! Rock beats Scissor"
    } else if(playerChoice == "paper" && computerChoice == "rock") {
        return "You Won! Paper beats Rock"
    }  else if(playerChoice == "paper" && computerChoice == "paper") {
        return "It's a Tie!"
    } else if(playerChoice == "paper" && computerChoice == "scissor") {
        return "You Lose! Scissor beats Paper"
    } else if(playerChoice == "scissor" && computerChoice == "rock") {
        return "You Lose! Rock beats Scissor"
    } else if(playerChoice == "scissor" && computerChoice == "paper") {
        return "You Won! Scissor beats Paper"
    } else if(playerChoice == "scissor" && computerChoice == "scissor") {
        return "It's a Tie!"
    } 
}

console.log(oneRound(playerChoice, computerChoice));