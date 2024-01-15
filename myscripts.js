function getComputerChoice() {
    let options = ["ROCK", "PAPER", "SCISSORS"]
    return (options[(Math.floor(Math.random() * options.length))]);
}

function playRock() {
    let text = document.createElement("p");
    let scoreText = document.createElement("h4")
    let cpuChoice = getComputerChoice();
    if (cpuChoice == "PAPER") {
        results.appendChild(text);
        text.textContent = "You Lose! Paper beats Rock";
        wl[1]++
    } else if (cpuChoice == "SCISSORS") {
        results.appendChild(text);
        text.textContent = "You Win! Rock beats Scissors";
        wl[0]++
    } else if (cpuChoice == "ROCK") {
        playRock()
    }
    score.innerHTML = scoreText.textContent = "Player score " + wl[0] + ", CPU score " + wl[1];
}

function playPaper() {
    let text = document.createElement("p");
    let scoreText = document.createElement("h4")
    let cpuChoice = getComputerChoice();
    if (cpuChoice == "SCISSORS") {
        results.appendChild(text);
        text.textContent = "You Lose! Scissors beats Paper";
        wl[1]++
    } else if (cpuChoice == "ROCK") {
        results.appendChild(text);
        text.textContent = "You Win! Paper beats Rock";
        wl[0]++
    } else if (cpuChoice == "PAPER") {
        playPaper()
    }
    score.innerHTML = scoreText.textContent = "Player score " + wl[0] + ", CPU score " + wl[1];
}

function playScissors() {
    let text = document.createElement("p");
    let scoreText = document.createElement("h4")
    let cpuChoice = getComputerChoice();
    if (cpuChoice == "ROCK") {
        results.appendChild(text);
        text.textContent = "You Lose! Rock beats Scissors";
        wl[1]++
    } else if (cpuChoice == "PAPER") {
        results.appendChild(text);
        text.textContent = "You Win! Scissors beats Paper";
        wl[0]++
    } else if (cpuChoice == "SCISSORS") {
        playScissors()
    }
    score.innerHTML = scoreText.textContent = "Player score " + wl[0] + ", CPU score " + wl[1];
}

let wl = [0, 0]

const rock = document.querySelector("button.ROCK");
const paper = document.querySelector("button.PAPER");
const scissors = document.querySelector("button.SCISSORS");
const results = document.querySelector("#results");
const score = document.querySelector("#score");

rock.addEventListener('click', playRock);
paper.addEventListener('click', playPaper);
scissors.addEventListener('click', playScissors);