function getComputerChoice () {
    // multiply by three for the three different choices
    // you can also do 0-2 but my brain likes 1-3
    choice = Math.random()* 3;
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