/* ROCK PAPER SCISSORS 👊 */

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const scoreBoard = document.getElementById("scoreBoard");
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
let userScore = 0;
let computerScore = 0;

function updateScoreBoard() {
    userScoreSpan.textContent = userScore;
    computerScoreSpan.textContent = computerScore;
}

function updateDisplay(playerChoice, computerChoice, result) {
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    if (result === "YOU WIN!") {
        userScore++;
    } else if (result === "YOU LOSE!") {
        computerScore++;
    }

    updateScoreBoard();
}

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    updateDisplay(playerChoice, computerChoice, result);
}