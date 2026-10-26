const n: number = 10;
let number = 1;
let sum = 0;

while (number <= n) {
  sum += number;
  number++;
}

console.log(`Sum of first ${n} natural numbers = ${sum}`);

export {};
