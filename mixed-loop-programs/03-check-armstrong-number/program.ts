const number: number = 153;
const digits = String(Math.abs(Math.trunc(number))).length;
let remaining = Math.abs(Math.trunc(number));
let sum = 0;

while (remaining > 0) {
  const digit = remaining % 10;
  sum += digit ** digits;
  remaining = Math.floor(remaining / 10);
}

// Zero is also an Armstrong number.
if (number === 0) sum = 0;
const isArmstrong = number >= 0 && Number.isInteger(number) && sum === number;
console.log(`${number} ${isArmstrong ? "is" : "is not"} an Armstrong number.`);

export {};
