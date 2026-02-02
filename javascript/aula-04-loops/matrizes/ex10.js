const input = require("readline-sync");

const grades = Array.from({ length: 10 }, 
  () => Array.from({ length: 4 }, 
  () => Math.round(Math.random() * 101) / 10)); // Números de 0.0 a 10.0

const averages = [];

// Loop para percorrer as linhas
for (let student = 0; student < grades.length; student++) {
  let sum = 0;
  // Loop para percorrer as colunas
  for (let bimester = 0; bimester < grades[student].length; bimester++) {
    sum += grades[student][bimester];
  }
  const average = Number((sum / grades[student].length).toFixed(2));
  averages.push(average);
}

console.table(grades);
console.log(`Médias dos alunos: ${averages.join(" | ")}`);



