const terms: number = 10;
let first: number = 0;
let second: number = 1;
const series: number[] = [];

if (!Number.isInteger(terms) || terms < 0) {
  console.log("Please use a non-negative integer for the number of terms.");
} else {
  for (let i = 0; i < terms; i++) {
    series.push(first);
    const next = first + second;
    first = second;
    second = next;
  }
  console.log(`Fibonacci series (${terms} terms):`);
  console.log(series.join(" "));
}

export {};
