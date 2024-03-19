var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let [numberX, numberY] = lines;
let x = Number(numberX);
let y = Number(numberY);
let count = 0;
let i = 0;

if (x < y) {
  for (i = x + 1; i < y; i++) {
    if (i % 2 != 0) {
      count += i;
    }
  }
} else {
  for (i = y + 1; i < x; i++) {
    if (i % 2 != 0) {
      count += i;
    }
  }
}

console.log(count);