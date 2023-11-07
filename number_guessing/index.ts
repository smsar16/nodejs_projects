import PromptSync from "prompt-sync";
const prompt = PromptSync();

console.log("Select a number between 0 and 10\n");

function guess() {
  const user = parseInt(prompt("Guess the number: "));
  return user;
}

let chance = 0;

const randNum: number = Math.floor(Math.random() * 11); // Generate a random number between 0 and 10

let userInput: number;

while (chance < 3) {
  userInput = guess(); // Ask the user for input

  if (randNum === userInput) {
    console.log("Congrats! You guessed it correctly!");
    break; // Exit the loop if the guess is correct
  } else if (randNum < userInput) {
    console.log("You guessed a larger number. Try again!");
    chance += 1;
  } else if (randNum > userInput) {
    console.log("You guessed a smaller number. Try again!");
    chance += 1;
  }
}

if (chance === 3) {
  console.log("Sorry, you've run out of chances. The correct number was " + randNum);
}
