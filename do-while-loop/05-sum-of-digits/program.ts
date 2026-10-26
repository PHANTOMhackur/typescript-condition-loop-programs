const number: number = 12345;
let remaining = Math.abs(Math.trunc(number));
let sum = 0;

do {
  sum += remaining % 10;
  remaining = Math.floor(remaining / 10);
} while (remaining > 0);

console.log(`Sum of digits of ${number} = ${sum}`);

export {};
