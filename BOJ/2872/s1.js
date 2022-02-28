// 시뮬레이션으로 풀면 시간초과

const [n, ...arr] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v) => +v);

// 책 이동 횟수
let ans = 0;

// n-1번째 책부터 순회
for (let i = n - 1; i > 0; i--) {
  // i번째 책의 인덱스
  const idx = arr.indexOf(i);
  // i번째 책 위의 책 중에서 최댓값
  let maxNum = 0;
  for (let j = 0; j < idx; j++) {
    maxNum = arr[j] > maxNum ? arr[j] : maxNum;
  }
  // 최댓값이 존재 and 현재 책 위에 더 큰 수의 책이 있다면 현재 책을 뽑아서 맨 위로 이동
  if (maxNum && arr[idx] < maxNum) {
    let removed = arr.splice(idx, 1);
    arr.unshift(removed[0]);
    ans++;
  }
}

console.log(ans);
