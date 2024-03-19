let preco = 200;
let total = preco;
let regiao = "Sul";
let freteGratis = preco > 150 && regiao == "Sudeste";
let clientePremium = false;

if (!freteGratis) {
  total += 25;
}
if (clientePremium || total >= 220) {
  total -= 15;
}
console.log(total);
