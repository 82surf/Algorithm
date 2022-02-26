const input = +require('fs').readFileSync('input.txt').toString();

const solution = function (input) {
  if (input % 10) {
    return -1;
  }
  let remain = input;
  const ans = [0, 0, 0];
  const buttons = [300, 60, 10];
  for (let i = 0; i < ans.length; i++) {
    if (remain >= buttons[i]) {
      const n = parseInt(remain / buttons[i]);
      remain -= n * buttons[i];
      ans[i] = n;
    }
  }
  return ans.join(' ');
};

console.log(solution(input));
