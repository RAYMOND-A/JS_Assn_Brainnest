/*
Assignment (Mathematical Shapes):

// COMPARING TWO INTERGERS

*/
const PI = 3.14  

function areaDiagonal(side = 5) {
    area = (side**2) / 2;
}

areaDiagonal(side = 5)

function areaTriangle(base = 5, height = 6) {
    area = (base*height)/2;
    console.log("The area of this circle with side \' 5, 6 and 7\' is " + `${area}`);
}

areaTriangle(base= 5, height= 6)

function areaCircumferenceCircle(radius = 4) {
    area = PI*(radius**2);
    circumference = 2*PI*radius;
    console.log("The area of this circle with radius 5 is " + `${area}`);
    console.log("The circumference of this circle with radius 5 is " + `${circumference}`);
}

areaCircumferenceCircle(radius= 4)

/*
Assignment (Conditional Statements & Loops):

// COMPARING TWO INTERGERS

*/

function addIntegerNumbers (a, b){
    if (a >= 0 && b >= 0){
        if(a != b){
            console.log('The larger number is ' + Math.max(a,b));
        } else{
            console.log('Both numbers are equal!');
        }
    
    } else {
        console.log('Please add an integer');
    }
}

var textNum1 = prompt("Enter an integer value");
var textNum2 = prompt("Enter another integer value");

var num1 = parseInt(textNum1);
var num2 = parseInt(textNum2);

addIntegerNumbers(num1, num2);


/*

Assignment (Conditional Statements & Loops):
// CHECKING FOR EVEN NUMBERS

*/

function evenNumberCheck(a) {
    if (a % 2 == 0){
        console.log(`${a} ` + 'Is an Even number');
    } else {
        console.log(`${a} ` + 'Is an Odd number');
    }
}

var textEvenNum = prompt("Enter a number");
var num = parseInt(textEvenNum);

evenNumberCheck(num);


/*
Assignment (Main JavaScript Project):
// ROCK PAPER SCISSORS GAME

*/

const choices = ["rock", "paper", "scissors"];

// GETTING USER INPUT
let userInputs = prompt("Do you choose rock, paper or scissors?");
let userInput = userInputs.toLowerCase();
console.log(userInput);

function playerSelection() {
    if (userInput === "paper" || userInput === "rock" || userInput === "scissors") {
//   console.log("You chose" + ` ${userInput}`);
  return "You chose" + ` ${userInput}`;
} else {
//   console.log('Error! Try again!');
  return 'Error! Try again!';
}
}

userInput = playerSelection();
console.log(userInput);

// GETTING COMPUTER INPUT

 function computerPlayer() {
     let computerInput = choices[Math.floor(Math.random()*3)];
// console.log("Computer chose" + ` ${computerInput}`);
return "Computer chose" + ` ${computerInput}`;
 }

computerInput = computerPlayer();
console.log(computerInput);

// DECLARE WINNER 
const winner = playRound(userInput, computerInput);

function playRound(userInput, computerInput) {
  if (userInput === 'rock' && computerInput === 'scissors') {
    console.log('You win! Rock beats scissors');
  } else if (userInput === 'scissors' && computerInput === 'paper') {
    console.log('You win! Scissors beats Paper');
  } else if (userInput === 'paper' && computerInput === 'rock'){
    console.log('You win! Paper beats rock');
  } else if (userInput === computerInput){
      console.log('You Tie');
  }
   else {
    console.log('You lose');
  }
}