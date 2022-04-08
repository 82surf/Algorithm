// 시간초과

PATH = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [N, M] = require('fs')
  .readFileSync(PATH)
  .toString()
  .trim()
  .split(' ')
  .map((v) => +v);

const arr = [];

const DFS = (idx) => {
  if (idx === M) {
    console.log(arr.join(' '));
    return;
  } else {
    for (let i = 1; i <= N; i++) {
      arr[idx] = i;
      DFS(idx + 1);
    }
  }
};

DFS(0);
