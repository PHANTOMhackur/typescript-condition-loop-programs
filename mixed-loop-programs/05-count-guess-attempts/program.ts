declare const require: (moduleName: string) => any;
declare const process: any;

const readline = require("node:readline");
const targetNumber = 7;
let attempts = 0;
const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askForGuess(): void {
  terminal.question("Enter guess (1-10): ", (answer: string) => {
    const guess = Number(answer.trim());

    if (!Number.isInteger(guess) || guess < 1 || guess > 10) {
      console.log("Please enter a whole number from 1 to 10.");
      askForGuess();
      return;
    }

    attempts++;
    if (guess === targetNumber) {
      console.log(`Correct! You guessed the number in ${attempts} attempt(s).`);
      terminal.close();
      return;
    }

    console.log(guess < targetNumber ? "Too low. Try again." : "Too high. Try again.");
    askForGuess();
  });
}

askForGuess();

export {};
