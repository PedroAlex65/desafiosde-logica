let input = require("fs").readFileSync("stdin", "utf-8");
let lines = input.split("\n");
let x = Number(lines[0]);

let arrayImpares = [];

let contandorImpares = 0;
let i = x;

while (contandorImpares < 6) {
  if (i % 2 !== 0) {
    arrayImpares.push(i);
    contandorImpares++;
  }
  i++;
}

for (let i = 0; i < arrayImpares.length; i++) {
  console.log(arrayImpares[i]);
}
