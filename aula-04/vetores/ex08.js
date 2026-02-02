const input = require("readline-sync");

const numbers = [];
let evenNumbers = [];
let sum = 0;

for (let i = 0; i < 10; i++) {
    const num = input.questionInt(`Digite o ${i + 1}º numero: `);
    numbers.push(num);
    sum += num;

    if (num % 2 == 0) {
        evenNumbers.push(num);
    }

}

console.log(`Vetor original: [${numbers}]`);

const oddIndexes = [];
for (let i = 1; i < numbers.length; i += 2) {
    oddIndexes.push(numbers[i]);
}
console.log(`Elementos nos índices ímpares: ${oddIndexes}`);

console.log(`Números pares: ${evenNumbers}`);

console.log(`Soma dos elementos: ${sum}`);

const average = sum / numbers.length;
console.log(`Média dos elementos: ${average.toFixed(2)}`);