// Importa o módulo e o armazena na constante 
const input = require("readline-sync");

// Array para armazenar as notas e variável para soma
const grades = [];
let sum = 0;

// Entrada de dados
for (let i = 0; i < 4; i++) {
  const grade = input.questionFloat(`Digite a ${i + 1}ª nota : `);
  grades.push(grade);
  sum += grade;
}

// Calculo da média
const average = sum / grades.length;

// Exibição do resultado
console.log(`A média das notas é: ${average.toFixed(2)}.`);
