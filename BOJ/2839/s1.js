const input = +require('fs').readFileSync('input.txt').toString();

const solution = function (input) {
  let numOf5 = parseInt(input / 5);
  let remain = input - 5 * numOf5;
  let numOf3 = parseInt(remain / 3);

  while (numOf5) {
    remain = input - 5 * numOf5;
    numOf3 = parseInt(remain / 3);
    if (remain % 3) {
      numOf5 -= 1;
    } else {
      return numOf3 + numOf5;
    }
  }
  if (input % 3) {
    return -1;
  } else {
    return input / 3;
  }
};

console.log(solution(input));
