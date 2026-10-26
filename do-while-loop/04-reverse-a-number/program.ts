const number: number = 12345;
let remaining = Math.abs(Math.trunc(number));
let reversed = 0;

do {
  const digit = remaining % 10;
  reversed = reversed * 10 + digit;
  remaining = Math.floor(remaining / 10);
} while (remaining > 0);

console.log(`Reverse of ${number} = ${reversed}`);

export {};
