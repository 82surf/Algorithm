// 메모리 초과

const PATH = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const N = +require('fs').readFileSync(PATH).toString().trim();

const primeNums = ['2', '3', '5', '7', '9'];
const arr = Array.from({ length: N }, () => 0);

const isPrimeNum = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const isValid = (numStr) => {
  for (let i = 1; i <= numStr.length; i++) {
    const tmp = numStr.slice(0, i);
    if (!isPrimeNum(tmp)) {
      return false;
    }
  }
  return true;
};

const DFS = (curr) => {
  if (curr === N) {
    const ans = arr.join('');
    if (isValid(ans)) {
      console.log(ans);
    }
    return;
  } else {
    for (let primeNum of primeNums) {
      arr[curr] = primeNum;
      DFS(curr + 1);
    }
  }
};

DFS(0);
