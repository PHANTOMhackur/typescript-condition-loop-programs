const number: number = 12345;
let remaining = Math.abs(Math.trunc(number));
let count = 0;

if (remaining === 0) {
  count = 1;
} else {
  while (remaining > 0) {
    count++;
    remaining = Math.floor(remaining / 10);
  }
}

console.log(`Number of digits in ${number} = ${count}`);

export {};
