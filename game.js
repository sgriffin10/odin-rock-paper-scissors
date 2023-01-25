// console.log("testing2");

function getComputerChoice(){
    const choices = ['Rock','Paper','Scissors'];
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerChoice, computerChoice){
    console.log(`player choice ${playerChoice} and computer choice ${computerChoice}`);

    if (playerChoice === computerChoice){
        console.log("tie")
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

for (let i = 0; i < 6; i++){
    if (computerScore === 3){
        console.log(`You lost the game to the computer. The final score was ${printScore()}`);
        break;
    } else if (playerScore === 3){
        console.log(`You won the game!. The final score was ${printScore()}`);
        break;
    } else {
        const choices = getSelections();
        let computerChoice = choices[0];
        let playerChoice = choices[1];
        let winner = playRound(playerChoice,computerChoice);
        while (winner === 0){
            const choices = getSelections();
            let computerChoice = choices[0];
            let playerChoice = choices[1];
            winner = playRound(playerChoice,computerChoice);
        };
        if (winner === 1){
            playerScore ++;
        } else {
            computerScore ++;
        }
    }
    console.log(printScore());
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