const PATH = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [N, ...ropes] = require('fs')
  .readFileSync(PATH)
  .toString()
  .trim()
  .split('\n')
  .map((v) => +v);

ropes = ropes.sort((a, b) => a - b);

let ans = 0;
for (let i = 0; i < ropes.length; i++) {
  const w = ropes[i] * (ropes.length - i);
  if (ans < w) {
    ans = w;
  }
}
console.log(ans);
