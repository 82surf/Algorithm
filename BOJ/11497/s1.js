// 시간 초과

const PATH = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [T, ...cases] = require('fs')
  .readFileSync(PATH)
  .toString()
  .trim()
  .split('\r\n');

for (let i = 1; i < cases.length; i += 2) {
  let logs = cases[i].split(' ');
  logs = logs.map((v) => +v).sort((a, b) => a - b);

  const ansLogs = [];
  cnt = 0;
  while (logs.length > 0) {
    const max = Math.max(logs);
    const maxVal = logs.splice(logs.indexOf(max), 1);
    if (cnt % 2) {
      ansLogs.push(maxVal[0]);
    } else {
      ansLogs.unshift(maxVal[0]);
    }
    cnt++;
  }
  const heightDiffs = ansLogs.map((v, i) => {
    if (i < ansLogs.length - 1) {
      return ansLogs[i + 1] - v;
    } else {
      return v - ansLogs[0];
    }
  });
  console.log(Math.max(...heightDiffs));
}
