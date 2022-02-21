const arr = require("fs").readFileSync("input.txt").toString().split("");

flag = 0;
for (let i = 0; i < arr.length; i++) {
  if (
    (flag === 0 && arr[i] === "U") ||
    (flag === 1 && arr[i] === "C") ||
    (flag === 2 && arr[i] === "P") ||
    (flag === 3 && arr[i] === "C")
  ) {
    ++flag;
    if (flag === 4) {
      break;
    }
  }
}

console.log(flag === 4 ? "I love UCPC" : "I hate UCPC");
