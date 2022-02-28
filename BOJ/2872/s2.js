const [n, ...arr] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n') // \r\n으로 잘라서 계속 틀렸다...
  .map((v) => +v);

const lastBookIdx = arr.indexOf(n);
let bookNum = n - 1;
let fixedBooks = 1;

for (let i = lastBookIdx - 1; i >= 0; i--) {
  if (arr[i] === bookNum) {
    bookNum--;
    fixedBooks++;
  }
}

console.log(arr.length - fixedBooks);
