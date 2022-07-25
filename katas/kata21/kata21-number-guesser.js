function getRandomInt() {
  return Math.floor(Math.random() * 100);
}

let numberToGuess = getRandomInt();

let prompt = require("prompt-sync")();


let answer = parseInt(prompt("Guess a number between 0 and 99: "));
console.log("You answered: " + answer);

while (answer !== numberToGuess) {
  if (answer === NaN) {
    answer = parseInt(prompt("Not a number, try again: "))
  } else if (answer > numberToGuess) {
    answer = parseInt(prompt("Too high! Guess again: "))
  } else {
    answer = parseInt(prompt("Too low! Guess again: "))
  }
}

prompt("You guessed it!")


