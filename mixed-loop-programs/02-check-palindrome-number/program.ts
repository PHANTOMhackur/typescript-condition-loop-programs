const number: number = 121;
const original = Math.abs(Math.trunc(number));
let remaining = original;
let reversed = 0;

while (remaining > 0) {
  const digit = remaining % 10;
  reversed = reversed * 10 + digit;
  remaining = Math.floor(remaining / 10);
}

const isPalindrome = number >= 0 && original === reversed;
console.log(`${number} ${isPalindrome ? "is" : "is not"} a palindrome number.`);

export {};
