//rock paper scissor pseudocode for creating algortihm 
/* I was given a tip to start with giving the computer a function to choose a random answer, additionally to have it loop for 5 rounds, and have inputs case insensitive*/

//Have computer choose answer at random

//const computerPlay = (arr) => arr[Math.floor(Math.random() * arr.length)];

//let choice = computerPlay(["rock", "paper", "scissor"]);

//Have browser receive input from user

//let userChoice = prompt("Enter Rock, Paper, or Scissor");

//The input should be case insensitive

/*function capitalizeFirstLetter(userChoice) {
    return userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();
  }*/

//Returns answers to be used in function

let computerSelection = choice
let userSelection = userChoice

var compScore = 0;
var playerScore = 0;
var rounds = 1;

function playRound( computerSelection, userSelection) {



//Have function that compares values of inputs and returns a winner
const weapons = {
  Rock: {weakTo: 'paper', strongTo: 'scissors'},
  Paper: {weakTo: 'scissors', strongTo: 'rock'},
  Scissors: {weakTo: 'rock', strongTo: 'paper'}
}

if (weapons[userSelection].strongTo === computerSelection) {
   // I won
   playerScore++;
   rounds++
   return;
}

if (weapons[userSelection].weakTo === computerSelection) {
   // I Lost
   computerScore++;
   rounds++
   return;

}

if (weapons[userSelection] === computerSelection){
  //Tie
  rounds++
  return;
}
}



//Loop for 5 Rounds
while(playerScore < 3 && computerScore < 3 && rounds < 6){

  console.log("** ROUND" + " " + rounds + " **\n");

  var userChoice  = prompt("Do you choose Rock, Paper or Scissors?").toLowerCase();



  if (userChoice !== "rock" && userChoice !== "paper" && userChoice!== "scissors"){
      console.log("You did not chose rock, paper or scissors!");
  }
  else {
      console.log("You chose" + " " + userChoice);
  var choice = Math.random();
  if (choice <= 0.33){
      choice="rock";
      console.log("The computer chose" + " " + choice);
  }
  else if (choice >= 0.67) {
      choice="scissors";
      console.log("The computer chose" + " " + choice);
  }
  else {
      choice="paper";
      console.log("The computer chose" + " " + choice);
      }

      console.log("\n" + compare(userChoice, choice));
  }
  console.log("\nThe score is" + " " + playerScore + " "+ "Player," + " " + computerScore + " " + "Computer\n" );
  rounds++;
  }

//print winner
if (playerScore > compScore){
  console.log("You win!");
}
else if (playerScore < compScore){
  console.log("Computer wins!");
}
else {
  console.log("It's a gremlin tie!");
}
