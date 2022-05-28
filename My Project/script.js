//rock paper scissor pseudocode for creating algortihm 
/* I was given a tip to start with giving the computer a function to choose a random answer, additionally to have it loop for 5 rounds, and have inputs case insensitive*/

//Have computer choose answer at random

const computerPlay = (arr) => arr[Math.floor(Math.random() * arr.length)];

let choice = computerPlay(["Rock", "Paper", "Scissor"]);

//Have browser receive input from user

let userChoice = prompt("Enter Rock, Paper, or Scissor");

//The input should be case insensitive

function capitalizeFirstLetter(userChoice) {
    return userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();
  }

//Returns answers to be used in function

let computerSelection = choice
let userSelection = userChoice

function playRound( computerSelection, userSelection) {

}

//Have function that compares values of inputs and returns a winner



//Loop for 5 Rounds

//print winner or loser

