let choices = ["rock", "paper", "scissor"];
let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
    let randomizer = Math.floor(Math.random() * 3);
    return choices[randomizer];
}

let getPlayerChoice = () => {
    return prompt("Pick your fighter!");
}


let oneRound = (playerChoice, computerChoice) => {
    console.log(playerChoice, computerChoice);

    if(playerChoice == "rock" && computerChoice == "rock") {
        playerScore += 1;
        computerScore += 1;
        return "It's a Tie!"
    } else if(playerChoice == "rock" && computerChoice == "paper") {
        playerScore -= 1;
        computerScore += 1;
        return "You Lose! Paper beats Rock"
    } else if(playerChoice == "rock" && computerChoice == "scissor") {
        playerScore += 1;
        computerScore -= 1;
        return "You Won! Rock beats Scissor"
    } else if(playerChoice == "paper" && computerChoice == "rock") {
        playerScore += 1;
        computerScore -= 1;
        return "You Won! Paper beats Rock"
    }  else if(playerChoice == "paper" && computerChoice == "paper") {
        playerScore += 1;
        computerScore += 1;
        return "It's a Tie!"
    } else if(playerChoice == "paper" && computerChoice == "scissor") {
        playerScore -= 1;
        computerScore += 1;
        return "You Lose! Scissor beats Paper"
    } else if(playerChoice == "scissor" && computerChoice == "rock") {
        playerScore -= 1;
        computerScore += 1;
        return "You Lose! Rock beats Scissor"
    } else if(playerChoice == "scissor" && computerChoice == "paper") {
        playerScore += 1;
        computerScore += 1;
        return "You Won! Scissor beats Paper"
    } else if(playerChoice == "scissor" && computerChoice == "scissor") {
        playerScore += 1;
        computerScore += 1;
        return "It's a Tie!"
    } else {
        return "Invalid input!"
    }
}

let playGame = () => {
    for(let i = 0; i < 5; i++) {
        playerChoice = getPlayerChoice().toLowerCase();
        computerChoice = getComputerChoice();

        oneRound(playerChoice, computerChoice);
    }
    if(playerScore > computerScore) {
        console.log(`Player Score: ${playerScore}\nComputer Score: ${computerScore}\nYou Won!`)
    } else {
        console.log(`Player Score: ${playerScore}\nComputer Score: ${computerScore}\nYou Lose!`)
    }
}

playGame();
