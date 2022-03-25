const PATH = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [A, B] = require('fs')
  .readFileSync(PATH)
  .toString()
  .trim()
  .split(' ')
  .map((v) => +v);

let ans = 1;
while (A !== B) {
  if (A > B) {
    ans = -1;
    break;
  } else if (B % 10 === 1) {
    B = (B - 1) / 10;
    ans++;
  } else if (B % 2 === 0) {
    B /= 2;
    ans++;
  } else {
    ans = -1;
    break;
  }
}

console.log(ans);
