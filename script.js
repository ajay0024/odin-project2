function getComputerChoice(){
    let possibleResults = ["Rock", "Paper","Scissors"] ;
    let randomNumber=Math.floor(Math.random()*possibleResults.length);
    return (possibleResults[randomNumber]);
}
function playSingleRound(playerSelection, computerSelection){
    let possibleChoices = ["rock", "paper","scissors"] ;
    if (!possibleChoices.includes(playerSelection.toLowerCase())){
        console.log (`You chose wrong word. Your choices are ${possibleChoices.join(", ")}`)
        return ("Draw")
    }
    let playerIndex = possibleChoices.indexOf(playerSelection.toLowerCase())
    let computerIndex = possibleChoices. indexOf(computerSelection.toLowerCase())
    console.log(playerIndex, computerIndex)
    if (computerIndex == (playerIndex + 1)% possibleChoices.length){
        console.log (`You Lose! ${computerSelection} beats ${playerSelection}`);
        return("Computer")
    } else if (playerIndex == (computerIndex + 1)% possibleChoices.length){
        console.log (`You Win! ${playerSelection} beats ${computerSelection}`);
        return ("Player")
    } else {
        console.log (`It was a Draw! Both chose ${playerSelection}`);
        return ("Draw")
    }
}
function game(){
    let playerWinningCount = 0;
    let computerWinningCount =0
    for (let i = 0; i < 5; i++) {
        let playerChoice=prompt(`Round ${i+1} : Enter Your Choice From 'Rock', 'Paper', 'Scissors'. Results are declared in console.`)
        let computerChoice = getComputerChoice();
        let roundWinner = playSingleRound(playerChoice,computerChoice);
        (roundWinner == "Player")? playerWinningCount++ : (roundWinner == "Computer") && computerWinningCount++ ;
    }
    console.log ( (playerWinningCount > computerWinningCount)? "You Won!" : (computerWinningCount > playerWinningCount) ? "Computer Won!": "It was a Draw")
}
game()
