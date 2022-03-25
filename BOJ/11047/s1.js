const fs = require('fs');
const PATH = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

let [NK, ...coins] = fs.readFileSync(PATH).toString().trim().split('\n');
let [N, K] = NK.split(' ').map((v) => +v);
coins = coins.map((v) => +v);
let ans = 0;

for (let i = N - 1; i >= 0; i--) {
  if (K === 0) {
    break;
  } else if (coins[i] <= K) {
    const n = Math.floor(K / coins[i]);
    K -= n * coins[i];
    ans += n;
  }
}

console.log(ans);
