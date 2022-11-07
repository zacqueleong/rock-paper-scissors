/* The Odin Project 
    Project: Rock Paper Scissors
    Coded by: Zacque Leong
*/

// Prompt how many rounds to play.
let roundInput = prompt("How many round(s) you wish to play?")

// Execute Game based on number of Rounds entered.
game(roundInput);

function game(roundInput){

    // Define the available choice in a game.
    const choice = ["Rock","Paper","Scissors"]

    // Set Title to print at Console.
    const title = "<- Rock~Paper~Scissors! ->";

    // Print Title at Console.
    console.log(title);

    // Convert User Input from String to Integer for loop execution.
    let nRoundInput = parseInt(roundInput);

    // Loop through playRound function based on Round input.
    for(i=0;i<nRoundInput;i++){

        // Round should start from 1 and beyond, hence +1 always.
        let round = i +1;

        // Call function to obtain Player Choice.
        let playerSelection = getPlayerChoice();

        // Call function to obtain Computer Choice.
        let computerSelection = getComputerChoice(choice);

        // Call function to Play Round by taking in Player and Computer choice.
        let result = playRound(playerSelection,computerSelection);

        // Print result to console.
        console.log("Round: " + round);
        console.log("Player Choice: " + playerSelection);
        console.log("Computer Choice: " + computerSelection);
        console.log("Result: " + result);

        // Print result as an alert prompt.
        alert(
            "Round: " + round + "\n" +
            "Player Choice: " + playerSelection + "\n" +
            "Computer Choice: " + computerSelection + "\n" +
            "Result: " + result
        )    
     }
}

function getPlayerChoice(){

    // Obtain Input from User.
    const input = prompt("Rock, Paper or Scissors?");

    // Convert Input to Lower Case Letter.
    const lowCaseInput = input.toLowerCase();

    // Format Input to Capitalize First Letter.
    const formattedInput = lowCaseInput.charAt(0).toUpperCase() + lowCaseInput.slice(1);

    return formattedInput;
}

function getComputerChoice(arr){
    
    // Generate a Random Index number within Array's Length.
    const randomIndex = Math.floor(Math.random() * arr.length);

    // Map the generated Index number to Array, store that value as item.
    const item = arr[randomIndex];

    // Return the item as Computer's Choice.
    return item;
}

function playRound(playerSelection, computerSelection){

    let outcome;

    // Evaluate Condition Algorithm.
    switch (playerSelection) {

        case "Rock":
            if(computerSelection === "Rock"){
                outcome = "Draw";
            }else if(computerSelection === "Paper"){
                outcome = "You Lose! " + computerSelection + " beats " + playerSelection + "!";
            }else if(computerSelection === "Scissors"){
                outcome = "You Win! " + playerSelection + " beats " + computerSelection + "!";
            }         
            break;

        case "Paper":
            if(computerSelection === "Paper"){
                outcome = "Draw";
            }else if(computerSelection === "Rock"){
                outcome = "You Win! " + playerSelection + " beats " + computerSelection + "!";
            }else if(computerSelection === "Scissors"){
                outcome = "You Lose! " + computerSelection + " beats " + playerSelection + "!";
            }
            break;

        case "Scissors":
            if(computerSelection === "Scissors"){
                outcome = "Draw";
            }else if(computerSelection === "Paper"){
                outcome = "You Win! " + playerSelection + " beats " + computerSelection + "!";
            }else if(computerSelection === "Rock"){
                outcome = "You Lose! " + computerSelection + " beats " + playerSelection + "!";
            }
            break;

        default:
            outcome = "Invalid";
    }
    return outcome;
}