const input = +require("fs").readFileSync("input.txt").toString();

let n = 1;

while (true) {
  if (input >= (n ** 2 + n) / 2) {
    n++;
  } else {
    break;
  }
}

console.log(n - 1);
