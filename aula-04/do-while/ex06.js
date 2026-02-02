const input = require("readline-sync");

let multipleOf3Sum = 0;
let multipleOf3Count = 0;

do {
  const number = input.questionInt("Digite um número (0 para sair): ");
  
  if (number == 0) {
    break;
  }

  if (number % 3 == 0) {
    multipleOf3Sum += number;
    multipleOf3Count++;
  }
} while (true);

if (multipleOf3Count == 0) {
  console.log("Nenhum múltiplo de 3 foi digitado.");
} else {
  const average = multipleOf3Sum / multipleOf3Count;
  console.log(`A média dos números múltiplos de 3 é: ${average.toFixed(2)}`);
}