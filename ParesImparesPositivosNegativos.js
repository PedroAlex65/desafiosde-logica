var input = require("fs").readFileSync("stdin", "utf8");

var lines = input
  .trim()
  .split("\n")
  .map((number) => {
    return Number(number);
  });

  var pares = 0, impares = 0, positivos = 0, negativos = 0;

  lines.forEach((number) => {
    if (number % 2 === 0) pares++;
    else impares++;
  
    if (number > 0) positivos++;
    else if (number < 0) negativos++;
  });
  
  console.log(`${pares} valor(es) par(es)`);
  console.log(`${impares} valor(es) impar(es)`);
  console.log(`${positivos} valor(es) positivo(s)`);
  console.log(`${negativos} valor(es) negativo(s)`);