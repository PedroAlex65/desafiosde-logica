let input = require("fs").readFileSync("stdin", "utf8");
let lines = input.split("\n").map((number) => {
  return Number(number);
});
let x = lines[0];

for (let i = 1; i <= x; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
