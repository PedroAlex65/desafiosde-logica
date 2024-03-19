let input = require("fs").readFileSync("stdin", "utf-8");
let lines = input.split("");

for (let i = 0; i < lines.length; i++) {

  if (i % 2 === 0 && lines[i] !== "") {
    
    lines[i] = lines[i].toUpperCase();
  } else if (i % 2 !== 0 && lines[i] !== "") {
    lines[i] = lines[i].toLowerCase();
  }
}

console.log(lines.join(""));