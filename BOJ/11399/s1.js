const [n, ...arr] = require('fs').readFileSync('input.txt').toString().trim().split(/\s+/);

const numArr = arr.map(val => +val).sort((a, b) => a-b);
const minTimeArr = [];
for (let i=0; i < numArr.length; i++) {
  minTimeArr.push(i === 0 ? numArr[i] : numArr[i] + minTimeArr[i-1]);
};
const ans = minTimeArr.reduce((prev, curr) => prev + curr);
console.log(ans);