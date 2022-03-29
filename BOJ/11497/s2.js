const PATH = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [T, ...cases] = require('fs')
  .readFileSync(PATH)
  .toString()
  .trim()
  .split('\r\n');

for (let i = 1; i < cases.length; i += 2) {
  let logs = cases[i].split(' ');
  logs = logs.map((v) => +v).sort((a, b) => b - a);

  const diffs = [];
  for (let i = 0; i < logs.length - 1; i++) {
    if (!i) {
      diffs.push(logs[i] - logs[i + 1]);
      diffs.push(logs[i] - logs[i + 2]);
    } else if (i === logs.length - 2) {
      diffs.push(logs[i] - logs[i + 1]);
    } else {
      diffs.push(logs[i] - logs[i + 2]);
    }
  }
  console.log(Math.max(...diffs));
}
