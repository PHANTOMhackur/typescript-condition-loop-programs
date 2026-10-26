const number: number = 17;
let isPrime = number >= 2;

for (let divisor = 2; divisor * divisor <= number && isPrime; divisor++) {
  if (number % divisor === 0) {
    isPrime = false;
  }
}

console.log(`${number} ${isPrime ? "is" : "is not"} a prime number.`);

export {};
