// Importa o módulo e o armazena na constante 
const input = require("readline-sync");

// Array para armazenar os números
const numbers = [];

// Entrada de dados
for (let i = 0; i < 4; i++) {
  const number = input.questionInt(`Digite o ${i + 1}º número: `);
  numbers.push(number);
}

// Cálculo da subtração (n1 * n2) – (n3 * n4)
const result = (numbers[0] * numbers[1]) - (numbers[2] * numbers[3]);

// Exibição do resultado
console.log(`(${numbers[0]} * ${numbers[1]}) - (${numbers[2]} * ${numbers[3]}) = ${result}`);

