let humanScore = 0;
let computerScore = 0;


function getComputerChoice () {
    // multiply by three for the three different choices
    // you can also do 0-2 but my brain likes 1-3
    let choice = Math.random() * 3;
    console.log("Unrounded value: " + choice);
    // use celiing so that the number cannot be 0
    choice = Math.ceil(choice);
    console.log("Rounded value: " + choice);

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
  let userPrompt = prompt("Rock, paper, scissors!");
  let userChoice = userPrompt.toLowerCase();

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

/*

repeat until we get a valid answer
while (getHumanChoice() === 0)
    getHumanChoice()
*/

function playRound(humanChoice, computerChoice){
    //rock beats scissors 1
    //scissors beats paper 2
    //paper beats rock 3
    let winner = '';

    //human win conditions
    humanWinCondition1 = humanChoice === "rock" && computerChoice === "scissors" ? winner = "h1" : false;
    humanWinCondition2 = humanChoice === "scissors" && computerChoice === "paper" ? winner = "h2" : false;
    humanWinCondition3 = humanChoice === "paper" && computerChoice === "rock" ? winner = "h3" : false;

    //computer win conditions
    computerWinCondition1 = computerChoice === "rock" && humanChoice === "scissors" ? winner = "c1" : false;
    computerWinCondition2 = computerChoice === "scissors" && humanChoice === "paper" ? winner = "c2" : false;
    computerWinCondition3 = computerChoice === "paper" && humanChoice === "rock" ? winner = "c3" : false;

    // tie condition
    tieCondition = humanChoice === computerChoice ? winner = "tie" : false;
    
    // parse winner variable with all options, see which is true
    switch(winner){
        case "h1":
            console.log("You win! Rock beats scissors!")
            humanScore ++
            console.log(`Score\nYou: ${humanScore}\nComputer: ${computerScore}`)
            break
        case "h2":
            console.log("You win! Scissors beats paper!")
            humanScore ++
            console.log(`Score\nYou: ${humanScore}\nComputer: ${computerScore}`)
            break
        case "h3":
            console.log("You win! Paper beats rock!")
            humanScore ++
            console.log(`Score\nYou: ${humanScore}\nComputer: ${computerScore}`)
            break
        case "c1":
            console.log("You lose :( Rock beats scissors.")
            computerScore ++
            console.log(`Score\nYou: ${humanScore}\nComputer: ${computerScore}`)
            break
        case "c2":
            console.log("You lose :( Scissors beats paper.")
            computerScore ++
            console.log(`Score\nYou: ${humanScore}\nComputer: ${computerScore}`)
            break
        case "c3":
            console.log("You lose :( Paper beats rock.")
            computerScore ++
            console.log(`Score\nYou: ${humanScore}\nComputer: ${computerScore}`)
            break
        case "tie":
            console.log("Tie! Great minds think a like!")
            break
    }


}

function playGame(){
    for(let i = 0; i >= 5; i++){
        playRound(getHumanChoice(),getComputerChoice());
    }
    console.log(`Thanks for playing! Final scores\nYou: ${humanScore}\nComputer: ${computerScore}`)
}



