// console.log("testing2");

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (playerScore !== 5 && computerScore !== 5){
            let btnType = button.className;
            console.log(`btnType is ${btnType}`);
            logic(btnType);
        }
        
    });
});



function getComputerChoice(){
    const choices = ['Rock','Paper','Scissors'];
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerChoice, computerChoice){
    let scoreMessage = `Your choice: ${playerChoice}
    Computer choice: ${computerChoice}`;
    displayMessage(scoreMessage);

    if (playerChoice === computerChoice){
        displayMessage("tie");
        return 0;
    }

    switch (playerChoice){
        case "rock":
            return computerChoice === "paper" ? 2:
            1;
        case "paper":
            return computerChoice === "scissors" ? 2:
            1;
        case "scissors":
            return computerChoice === "paper" ? 1:
            2;
    }
        
}

let computerScore = 0;
let playerScore = 0;

function incrementScoreDisplay(player){
    const playerType = document.querySelector(player);
    console.log(`playerType is ${playerType.textContent}`);
    let textContent = playerType.textContent.trim();
    // console.log(textContent.length);
    let displayedScore = textContent.slice(-1);
    console.log(`displayedScore is ${displayedScore}`);
    let newContent = textContent.replace(displayedScore, Number(displayedScore) + 1);
    playerType.textContent = newContent;
}

function logic(playerChoice){
    let computerChoice = getComputerChoice().toLowerCase();
    let winner = playRound(playerChoice,computerChoice);
    if (winner === 0){
        console.log("The result was a tie! Please choose again");
    } else {
        if (winner === 1){
            playerScore ++;
            incrementScoreDisplay(".human");
            if (playerScore === 5){
                winnerWinnerChickenDinner(1);
            }
        } else {
            computerScore ++;
            incrementScoreDisplay(".computer");
            if (computerScore === 5){
                winnerWinnerChickenDinner(0);
            }
        }

        console.log(printScore());

        }
    }

function displayMessage(message){
    const displayBox = document.querySelector(".congrats");
    displayBox.textContent = message;
}

function winnerWinnerChickenDinner(winner){
    if (winner === 0){
        console.log("The computer won! Wow you're not so smart after all...");
        displayMessage("The computer won! Wow you're not so smart after all...");
    } else {
        console.log("Congratulations you won! You've proved yourself worthy!");
        displayMessage("Congratulations you won! You've proved yourself worthy!");
    }
    // playerScore = 0;
    // computerScore = 0;

}

function getSelections(){
    let computerChoice = getComputerChoice().toLowerCase();
    let playerChoice = prompt("Please enter the following choices: Rock, Paper, Scissors").toLowerCase();
    
    while (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors" || playerChoice === null){
        playerChoice = prompt("That is not an option. Please re-enter the following choices: Rock, Paper, Scissors", "").toLowerCase();
    }

    return [computerChoice, playerChoice];
}

function printScore(){
    return `Your score: ${playerScore}, Computer's score: ${computerScore}`;
}

// const playerChoice = "scissors";

// console.log(playRound(playerChoice,computerChoice));