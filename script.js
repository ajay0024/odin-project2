function getComputerChoice(){
    let possibleResults = ["Rock", "Paper","Scissors"] ;
    let randomNumber=Math.floor(Math.random()*possibleResults.length);
    return (possibleResults[randomNumber]);
}
function playSingleRound(playerSelection, computerSelection){
    let possibleChoices = ["rock", "paper","scissors"] ;
    if (!possibleChoices.includes(playerSelection.toLowerCase())){
        return (`You chose wrong word. Your choices are ${possibleChoices.join(", ")}`)
    }
    let playerIndex = possibleChoices.indexOf(playerSelection.toLowerCase())
    let computerIndex = possibleChoices. indexOf(computerSelection.toLowerCase())
    console.log(playerIndex, computerIndex)
    if (computerIndex == (playerIndex + 1)% possibleChoices.length){
        return (`You Lose! ${computerSelection} beats ${playerSelection}`)
    } else if (playerIndex == (computerIndex + 1)% possibleChoices.length){
        return (`You Win! ${playerSelection} beats ${computerSelection}`)
    } else {
        return (`It was a Draw! Both chose ${playerSelection}`)
    }
}
function game(){
    for (let i = 0; i < 5; i++) {
        playerChoice=prompt("Enter Your Choice From 'Rock', 'Paper', 'Scissors'. Results are declared in console.")
        computerChoice = getComputerChoice()
        console.log(playSingleRound(playerChoice,computerChoice))
    }
}
game()
