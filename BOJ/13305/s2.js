// 58점

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const distances = input[1].split(' ').map((v) => +v);
const prices = input[2].split(' ').map((v) => +v);

let ans = 0;
let minPrice = prices[0];

for (let i = 0; i < distances.length; i++) {
  if (prices[i] < minPrice) {
    minPrice = prices[i];
  }
  ans += minPrice * distances[i];
}

console.log(ans);
