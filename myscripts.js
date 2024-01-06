function getComputerChoice() {
    let options = ["ROCK", "PAPER", "SCISSORS"]
    return (options[(Math.floor(Math.random() * options.length))]);
}

function getPlayerChoice() {
    player = prompt("Please make your choice");
    return (player.toUpperCase())
}

function playRound() {
    let cpuChoice = getComputerChoice()
    let playerChoice = getPlayerChoice()

    if (playerChoice == "ROCK" && cpuChoice == "PAPER") {
        console.log("You Lose! Paper beats Rock")
        wl[1]++
    } else if (playerChoice == "ROCK" && cpuChoice == "SCISSORS") {
        console.log("You Win! Rock beats Scissors")
        wl[0]++
    } else if (playerChoice == "ROCK" && cpuChoice == "ROCK") {
        playRound()
    } else if (playerChoice == "PAPER" && cpuChoice == "SCISSORS") {
        console.log("You Lose! Scissors beats Paper")
        wl[1]++
    } else if (playerChoice == "PAPER" && cpuChoice == "ROCK") {
        console.log("You Win! Paper beats Rock")
        wl[0]++
    } else if (playerChoice == "PAPER" && cpuChoice == "PAPER") {
        playRound()
    } else if (playerChoice == "SCISSORS" && cpuChoice == "ROCK") {
        console.log("You Lose! Rock beats Scissors")
        wl[1]++
    } else if (playerChoice == "SCISSORS" && cpuChoice == "PAPER") {
        console.log("You Win! Scissors beats Paper")
        wl[0]++
    } else {
        playRound()
    }
    console.log(wl)
    return wl
}

function game() {
for (let i = 0; i < 5; i++) {
    playRound()
    let wl = [0, 0]
}
}

game()