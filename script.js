let humanScore = 0;
let computerScore = 0;


function getComputerChoice () {
    // multiply by three for the three different choices
    // you can also do 0-2 but my brain likes 1-3
    let choice = Math.random() * 3;
    // use celiing so that the number cannot be 0
    choice = Math.ceil(choice);

    // use switch case instead of if then due to nature of function (easier to read)
    switch (choice) {
        case 1:
            return "rock";
        case 2:
            return "scissors";
        case 3:
            return "paper";
    }
}


function getHumanChoice () {
// Initialize prompt and convert to lowercase for easier comparing 
  

  // return 0 if not a valid answer
  switch(userChoice){
    case "rock":
        return "rock";
    case "scissors":
        return "scissors";
    case "paper":
        return "paper";
    default:
        return 0;
  }
}



function playRound(humanChoice, computerChoice){
    // rock beats scissors 1
    // scissors beats paper 2
    // paper beats rock 3
    let winner = '';

    // human win conditions
    humanWinCondition1 = humanChoice === "rock" && computerChoice === "scissors" ? winner = "h1" : false;
    humanWinCondition2 = humanChoice === "scissors" && computerChoice === "paper" ? winner = "h2" : false;
    humanWinCondition3 = humanChoice === "paper" && computerChoice === "rock" ? winner = "h3" : false;

    // computer win conditions
    computerWinCondition1 = computerChoice === "rock" && humanChoice === "scissors" ? winner = "c1" : false;
    computerWinCondition2 = computerChoice === "scissors" && humanChoice === "paper" ? winner = "c2" : false;
    computerWinCondition3 = computerChoice === "paper" && humanChoice === "rock" ? winner = "c3" : false;

    // tie condition
    tieCondition = humanChoice === computerChoice ? winner = "tie" : false;

    // stop condition
    if(humanScore >= 5 || computerScore >= 5){
        return
    }
    
    // parse winner variable with all options, see which is true
    switch(winner){
        case "h1":
            humanScore ++
            return("You win! Rock beats scissors!\n " + `Score\nYou: ${humanScore}\nComputer: ${computerScore}`)
        case "h2":
            humanScore ++
            return("You win! Scissors beats paper!\n " + `Score\nYou: ${humanScore}\nComputer: ${computerScore}`)
        case "h3":
            humanScore ++
            return("You win! Paper beats rock! \n" + `Score\nYou: ${humanScore}\nComputer: ${computerScore}`)
        case "c1":
            computerScore ++
            return("You lose :( Rock beats scissors. \n" + `Score\nYou: ${humanScore}\nComputer: ${computerScore}`)
        case "c2":
            computerScore ++
            return("You lose :( Scissors beats paper. \n" + `Score\nYou: ${humanScore}\nComputer: ${computerScore}`)
        case "c3":
            computerScore ++
            return("You lose :( Paper beats rock. \n" + `Score\nYou: ${humanScore}\nComputer: ${computerScore}`)
        case "tie":
            return("Tie! Great minds think a like!")
    }


}


const choiceContainer = document.createElement('div');
const resultsContainer = document.createElement('div');
const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorsButton = document.createElement('button');
let roundCounter = 0;

choiceContainer.setAttribute('id', 'choice-container');


rockButton.setAttribute('id', 'rock');
rockButton.textContent = 'Rock';
paperButton.setAttribute('id', 'paper');
paperButton.textContent = 'Paper';
scissorsButton.setAttribute('id', 'scissors');
scissorsButton.textContent = 'Scissors'

choiceContainer.appendChild(rockButton);
choiceContainer.appendChild(paperButton);
choiceContainer.appendChild(scissorsButton);
document.body.appendChild(choiceContainer);

function displayScore (displayString) {
    if(humanScore >= 5 || computerScore >= 5){
        displayString = `Game over! Final scores:\n
            You: ${humanScore}\n
            Computer: ${computerScore}\n
            Thanks for playing!`
    }
    resultsContainer.textContent = displayString;
    document.body.appendChild(resultsContainer)
    
}

choiceContainer.addEventListener('click', (e) => {
    let target = e.target;
    console.log(target.id);

    switch(target.id){
        case 'rock':
            displayScore(playRound(target.id,getComputerChoice()));
            break;
        case 'paper':
            displayScore(playRound(target.id,getComputerChoice()));
            break;
        case 'scissors':
            displayScore(playRound(target.id,getComputerChoice()));
            break;
        default:
            break;
    }
    
})



