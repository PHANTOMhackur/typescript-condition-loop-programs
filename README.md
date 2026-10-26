# TypeScript Condition with Looping Programs

This repository contains **20 TypeScript programs** based on the supplied notes. Each question has its own folder containing:

- `program.ts` — the source code for that question.
- `output.txt` — sample or expected output.
- `README.md` — a short description of the question.

## Programs included

### For Loop
1. Print numbers from 1 to 50.
2. Print squares of numbers from 1 to 10.
3. Print cubes of numbers from 1 to 10.
4. Find the factorial of a number.
5. Print the Fibonacci series for N terms.

### Mixed Loop Programs
6. Check whether a number is prime.
7. Check whether a number is a palindrome.
8. Check whether a number is an Armstrong number.
9. Print a star pattern using nested `for` loops.
10. Count guesses until the correct number is entered.

### While Loop
11. Print numbers from 1 to 10.
12. Print numbers from 10 to 1.
13. Find the sum of the first N natural numbers.
14. Print a multiplication table.
15. Count the digits in a number.

### Do-While Loop
16. Print numbers from 1 to 20.
17. Print even numbers from 1 to 100.
18. Print odd numbers from 1 to 100.
19. Reverse a number.
20. Find the sum of digits of a number.

## Requirements

- [Node.js](https://nodejs.org/) (version 18 or newer recommended)
- npm (comes with Node.js)

## Build the programs

Open a terminal in this repository folder and run:

```bash
npm install
npm run build
```

Compiled JavaScript files are created in the `dist/` folder, keeping the same folder structure as the TypeScript files.

## Run a program

For example, to run the factorial program:

```bash
node dist/for-loop/04-factorial-of-a-number/program.js
```

To run the interactive guessing game:

```bash
node dist/mixed-loop-programs/05-count-guess-attempts/program.js
```

Choose any question folder and run its matching compiled file under `dist/`. Update the sample constants inside `program.ts` to try different input values, then run `npm run build` again.

## GitHub upload

1. Extract the ZIP file.
2. Open the extracted `typescript-condition-loop-programs` folder in VS Code.
3. Open the terminal in that folder and run `git init` if it is not already a Git repository.
4. Run:

```bash
git add .
git commit -m "Add TypeScript looping programs"
```

5. Create an empty repository on GitHub, then connect and push it using the repository URL GitHub gives you:

```bash
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the example URL with your actual GitHub repository URL. Do not upload `node_modules/` or `dist/`; they are ignored by `.gitignore` and can be recreated with `npm install` and `npm run build`.
