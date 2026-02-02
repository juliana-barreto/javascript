const input = require("readline-sync");

const matrix = Array.from({ length: 3 }, 
  () => Array.from({ length: 3 }, 
  () => Math.round(Math.random() * 100))); // Números inteiros de 0 a 99

const mainDiagonal = [];
const secondaryDiagonal = [];
let mainDiagonalSum = 0;
let secondaryDiagonalSum = 0;

for (let row = 0; row < matrix.length; row++) {
  for (let col = 0; col < matrix[row].length; col++) {
    const element = matrix[row][col];
    // Elementos x[i][i] pertencem à diagonal principal
    if (row == col) {
      mainDiagonal.push(element);
      mainDiagonalSum += element;
    }
    // Elementos x[i][n-1-i] pertencem à diagonal secundária
    if (col == matrix.length - 1 - row) {
      secondaryDiagonal.push(element);
      secondaryDiagonalSum += element;
    }
  }
}
console.table(matrix);
console.log(`Elementos da diagonal principal: ${mainDiagonal}`);
console.log(`Elementos da diagonal secundária: ${secondaryDiagonal}`);
console.log(`Soma dos elementos da diagonal principal: ${mainDiagonalSum}`);
console.log(`Soma dos elementos da diagonal secundária: ${secondaryDiagonalSum}`);

