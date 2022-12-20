const WINNINGCONDITION = 5;

function getComputerChoice() {
    let possibleResults = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * possibleResults.length);
    return (possibleResults[randomNumber]);
}
function playSingleRound(playerSelection, computerSelection) {

    let winner;
    let possibleChoices = ["rock", "paper", "scissors"];

    let playerIndex = possibleChoices.indexOf(playerSelection.toLowerCase())
    let computerIndex = possibleChoices.indexOf(computerSelection.toLowerCase())

    if (computerIndex == (playerIndex + 1) % possibleChoices.length) {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        result = "lose"
    } else if (playerIndex == (computerIndex + 1) % possibleChoices.length) {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        result = "win"
    } else {
        console.log(`It was a Draw! Both chose ${playerSelection}`);
        result = "draw"
    }

    updateScore(result);
    displayRoundPlay(playerSelection, computerSelection, result);
    
    return result
}
function displayRoundPlay(a, b, winner) {
    let gameNode = document.getElementById("game");
    let playerButton = document.getElementById(a);
    let computerButton = document.getElementById(b.toLowerCase());
    let resultText = `${winner == "draw" ? "It's Draw!" : winner == "win" ? "You Win!" : "You Lose!"}`
    console.log(resultText)


    let parent = gameNode.parentNode;
    parent.removeChild(gameNode);
    let newNode = document.createElement("div");
    newNode.setAttribute("id", "currentPlay");


    let tempNode = document.createElement("div");
    let text1Node = document.createElement("p");
    text1Node.textContent = "YOUR PICK";
    tempNode.appendChild(text1Node);
    tempNode.appendChild(playerButton.cloneNode(true));
    newNode.appendChild(tempNode);

    let playerScore = document.getElementById("player-score");
    let computerScore = document.getElementById("computer-score");
    let newPlayerScore = parseInt(playerScore.innerHTML);
    let newComputerScore = parseInt(computerScore.innerHTML);
  
    if (newPlayerScore == WINNINGCONDITION ) resultText = "You Won the Game!";
    if (newComputerScore == WINNINGCONDITION) resultText = "You Lost the Game!"
    let buttontext = "Play Next";
    let gameOver = false;
    if (newPlayerScore == WINNINGCONDITION || newComputerScore == WINNINGCONDITION){
        buttontext = "Restart Game?";
        gameOver = true;
    }

    let resultNode = document.createElement("div");
    resultNode.setAttribute("id", "resultText")
    resultNode.innerHTML += `<p>${resultText}</p>`;
    let playAgainButtonNode = document.createElement('button');
    playAgainButtonNode.textContent = buttontext;
    playAgainButtonNode.addEventListener("click", () => replaceNode(newNode, gameNode, gameOver))
    resultNode.appendChild(playAgainButtonNode);
    newNode.appendChild(resultNode);


    tempNode = document.createElement("div");
    let text2Node = document.createElement("p");
    text2Node.textContent = "COMPUTER'S PICK";
    tempNode.appendChild(text2Node);
    tempNode.appendChild(computerButton.cloneNode(true))
    newNode.appendChild(tempNode);

    parent.appendChild(newNode);

}
function replaceNode(x, y, gameOver) {
    if (gameOver){
        document.getElementById("player-score").innerHTML = 0;
        document.getElementById("computer-score").innerHTML = 0;
    }
    document.body.replaceChild(y, x);
}
function updateScore(didWin) {
    let playerScore = document.getElementById("player-score");
    let computerScore = document.getElementById("computer-score");
    console.log(playerScore, computerScore, didWin)
    if (didWin == "win") {
        playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1;
    } else if (didWin == "lose") {
        computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1;
    } 
}

document.querySelector("#rules button").addEventListener("click",()=>{
    document.getElementById("overlay").classList.add("hide")
})
document.querySelector("#show-rules").addEventListener("click",()=>{
    document.getElementById("overlay").classList.remove("hide")
})

// function game() {
//     let playerWinningCount = 0;
//     let computerWinningCount = 0
//     for (let i = 0; i < 5; i++) {
//         let playerChoice = prompt(`Round ${i + 1} : Enter Your Choice From 'Rock', 'Paper', 'Scissors'. Results are declared in console.`)
//         let computerChoice = getComputerChoice();
//         let roundWinner = playSingleRound(playerChoice, computerChoice);
//         (roundWinner == "Player") ? playerWinningCount++ : (roundWinner == "Computer") && computerWinningCount++;
//     }
//     console.log((playerWinningCount > computerWinningCount) ? "You Won!" : (computerWinningCount > playerWinningCount) ? "Computer Won!" : "It was a Draw")
// }
// // game()

let optionButtons = document.getElementsByClassName('option-button');
console.log(optionButtons);
[...optionButtons].forEach(btn => {
    console.log(btn);
    btn.addEventListener("click", e => {
        let playerChoice = btn.getAttribute('id');
        let computerChoice = getComputerChoice();
        let roundWinner = playSingleRound(playerChoice, computerChoice);
    })
});

