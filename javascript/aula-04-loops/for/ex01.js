const input = require("readline-sync");

const number = input.questionInt("Digite o primeiro número do intervalo: ");
const number2 = input.questionInt("Digite o último número do intervalo: ");

if (number >= number2) {
  console.log("Intervalo inválido. O primeiro número deve ser menor que o segundo.");
} else {
  console.log(`Números entre ${number} e ${number2} que são múltiplos de 3 e 5:`);
  let count = 0;
  for (let i = number; i <= number2; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(i);
    }
  }
  if (count == 0) {
    console.log("Nenhum número encontrado.");
  }
}