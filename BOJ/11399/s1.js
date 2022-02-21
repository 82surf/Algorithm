const [n, ...arr] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(/\s+/)
  .map((v) => +v);

const sortedArr = arr.sort((a, b) => a - b);

const minTimeArr = [];

for (let i = 0; i < sortedArr.length; i++) {
  minTimeArr.push(i === 0 ? sortedArr[i] : sortedArr[i] + minTimeArr[i - 1]);
}

const ans = minTimeArr.reduce((prev, curr) => prev + curr);
console.log(ans);
