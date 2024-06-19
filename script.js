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
console.log(getComputerChoice());

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

function playround(humanChoice, computerChoice){
    //rock beats scissors 1
    //scissors beats paper 2
    //paper beats rock 3

    

}