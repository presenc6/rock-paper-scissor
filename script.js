let choices = ["rock", "paper", "scissor"];
let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;

let scoreDisplay = document.querySelector(".scoreDisplay");
scoreDisplay.textContent = `Player Score: ${playerScore}\nComputer Score: ${computerScore}`;

let getComputerChoice = () => {
    let randomizer = Math.floor(Math.random() * 3);
    return choices[randomizer];
}

/* let getPlayerChoice = () => {
    return prompt("Pick your fighter!");
} */


let oneRound = (playerChoice, computerChoice) => {

    if(playerChoice == "rock" && computerChoice == "rock") {
        playerScore += 1;
        computerScore += 1;
        console.log(playerScore, computerScore);
    } else if(playerChoice == "rock" && computerChoice == "paper") {
        playerScore -= 1;
        computerScore += 1;
        console.log(playerScore, computerScore);
    } else if(playerChoice == "rock" && computerChoice == "scissor") {
        playerScore += 1;
        computerScore -= 1;
        console.log(playerScore, computerScore);
    } else if(playerChoice == "paper" && computerChoice == "rock") {
        playerScore += 1;
        computerScore -= 1;
        console.log(playerScore, computerScore);
    }  else if(playerChoice == "paper" && computerChoice == "paper") {
        playerScore += 1;
        computerScore += 1;
        console.log(playerScore, computerScore);
    } else if(playerChoice == "paper" && computerChoice == "scissor") {
        playerScore -= 1;
        computerScore += 1;
        console.log(playerScore, computerScore);
    } else if(playerChoice == "scissor" && computerChoice == "rock") {
        playerScore -= 1;
        computerScore += 1;
        console.log(playerScore, computerScore);
    } else if(playerChoice == "scissor" && computerChoice == "paper") {
        playerScore += 1;
        computerScore += 1;
        console.log(playerScore, computerScore);
    } else if(playerChoice == "scissor" && computerChoice == "scissor") {
        playerScore += 1;
        computerScore += 1;
        console.log(playerScore, computerScore);
    } else {
        return "Invalid input!"
    }

    scoreDisplay.textContent = `Player Score: ${playerScore}\nComputer Score: ${computerScore}`;

    if(playerScore == 5) {
        console.log("You Won!")
        scoreDisplay.textContent = "You Win!"
        playerScore = 0;
        computerScore = 0;
    } else if(computerScore == 5) {
        scoreDisplay.textContent = "You Lose!"
        computerScore = 0;
        playerScore = 0;
    } else if(playerScore == 5 && computerScore == 5) {
        console.log("It's a Draw!")
        scoreDisplay.textContent = "It's a Draw!"
    }
}

/* let playGame = () => {
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
} */

//playGame();

const btn = document.querySelectorAll("button");

btn.forEach(button => {
    button.addEventListener("click", e => {
        oneRound(e.target.textContent, getComputerChoice());
    });
});