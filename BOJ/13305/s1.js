// 58점

const [n, ...arr] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(/\s+/)
  .map((v) => +v);

const distances = arr.slice(0, n - 1);
const prices = arr.slice(n - 1, n * 2 - 1);

let ans = 0;
let minPrice = prices[0];

for (let i = 0; i < distances.length; i++) {
  if (prices[i] < minPrice) {
    minPrice = prices[i];
  }
  ans += minPrice * distances[i];
}

console.log(ans);
