const input = require("readline-sync");

let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < 10; i++) {
  const number = input.questionInt(`Digite o ${i + 1}º número: `);

  if (number % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}

console.log(`Total de números pares: ${evenCount}`);
console.log(`Total de números ímpares: ${oddCount}`);