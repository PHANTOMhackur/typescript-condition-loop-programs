const number: number = 5;
let factorial: number = 1;

if (!Number.isInteger(number) || number < 0) {
  console.log("Please use a non-negative integer.");
} else {
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  console.log(`Factorial of ${number} = ${factorial}`);
}

export {};
