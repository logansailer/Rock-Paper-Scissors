function getComputerChoice() {
    let options = ["ROCK", "PAPER", "SCISSORS"]
    return (options[(Math.floor(Math.random() * options.length))]);
}

function getPlayerChoice() {
    player = prompt("Please make your choice");
    return (player.toUpperCase())
}

function playRound(cpuChoice, playerChoice) {
    if (playerChoice == "ROCK" && cpuChoice == "SCISSORS") {

    } else if (playerChoice == "ROCK" && cpuChoice == "PAPER") {
        console.log("You Lose! Paper beats Rock")
    } else if (playerChoice == "ROCK" && cpuChoice == "SCISSORS") {
        console.log("You Win! Rock beats Scissors")
    } else if (playerChoice == "ROCK" && cpuChoice == "ROCK") {
        
    } else if (playerChoice == "PAPER" && cpuChoice == "SCISSORS") {
        console.log("You Lose! Scissors beats Paper")
    } else if (playerChoice == "PAPER" && cpuChoice == "ROCK") {
        console.log("You Win! Paper beats Rock")
    } else if (playerChoice == "PAPER" && cpuChoice == "PAPER") {

    } else if (playerChoice == "SCISSORS" && cpuChoice == "ROCK") {
        console.log("You Lose! Rock beats Scissors")
    } else if (playerChoice == "SCISSORS" && cpuChoice == "PAPER") {
        console.log("You Win! Scissors beats Paper")
    } else {

    }

}

let cpuChoice = getComputerChoice()
let playerChoice = getPlayerChoice()
playRound(cpuChoice, playerChoice)

if 
console.log(cpuChoice)
console.log(playerChoice)

if 