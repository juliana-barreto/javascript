const input = require("readline-sync");

let positiveSum = 0;

do {
  const number = input.questionInt("Digite um número (0 para sair): ");

  if (number == 0) {
    break;
  }

  if (number > 0) {
    positiveSum += number;
  }
} while (true);

console.log(`A soma dos números positivos é: ${positiveSum}`);