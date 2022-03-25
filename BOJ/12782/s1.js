const PATH = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

let [T, ...bits] = require('fs')
  .readFileSync(PATH)
  .toString()
  .trim()
  .split('\n');

bits = bits.map((v) => v.split(' '));
for (let bit of bits) {
  const diff1 = Math.abs(
    bit[0].length -
      bit[0].split('1').length -
      (bit[1].length - bit[1].split('1').length),
  );
  let diff2 = 0;
  for (let i = 0; i < bit[0].length; i++) {
    if (bit[0][i] !== bit[1][i]) {
      diff2++;
    }
  }
  const ans = (diff2 - diff1) / 2 + diff1;
  console.log(ans);
}
