const input = require("fs").readFileSync("input.txt").toString();

let change = 1000 - input;

let ans = 0;

const coins = [500, 100, 50, 10, 5, 1];

for (let coin of coins) {
  if (change >= coin) {
    const n = parseInt(change / coin);
    change -= n * coin;
    ans += n;
  }
}

console.log(ans);
