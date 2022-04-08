PATH = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const N = +require('fs').readFileSync(PATH).toString().trim();

const isPrime = (num) => {
  for (let i = 2; i ** 2 <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const odds = [1, 3, 7, 9];

const DFS = (n, ans) => {
  if (n === N) {
    for (const a of ans) {
      console.log(a);
    }
  } else {
    const nextArr = [];
    for (const num of ans) {
      for (const o of odds) {
        const tmp = num * 10 + o;
        if (isPrime(tmp)) {
          nextArr.push(tmp);
        }
      }
    }
    DFS(n + 1, nextArr);
  }
};

DFS(1, [2, 3, 5, 7]);
