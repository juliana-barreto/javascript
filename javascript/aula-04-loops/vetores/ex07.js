const input = require("readline-sync");

// Gera um vetor com 10 números aleatórios entre 0 e 99
const numbers = Array.from({ length: 10 }, () =>  Math.round(Math.random() * 100));
// Variável para controlar se o número foi encontrado
let found = false;

const number = input.questionInt("Digite o número que deseja encontrar (entre 0 e 99): ");

// Ordena o vetor para facilitar a busca
numbers.sort((a, b) => a - b);

// Algoritmo busca binária
let begin = 0;
let end = numbers.length - 1;
let middle = 0;

while (begin <= end) {
    middle = Math.round((begin + end) / 2);
    if (numbers[middle] === number) {
        found = true;
        break;
    } else if (numbers[middle] < number) {
        begin = middle + 1; // Ignora a metade esquerda
    } else {
        end = middle - 1; // Ignora a metade direita
    }
}

if (found) {
    console.log(`O numero ${number} foi encontrado no vetor na posição ${middle}.`);
} else {
    console.log(`O numero ${number} não foi encontrado no vetor.`);
}
