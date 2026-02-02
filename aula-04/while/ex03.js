const input = require("readline-sync");

let under21Count = 0;
let over50Count = 0;

while (true) {
    const age = input.questionInt("Digite uma idade (ou um número negativo para sair): ");

    if (age < 0) {
        break;
    }

    if (age < 21) {
        under21Count++;
    } else if (age > 50) {
        over50Count++;
    }
}

console.log(`\nTotal de pessoas com menos de 21 anos: ${under21Count}`);
console.log(`Total de pessoas com mais de 50 anos: ${over50Count}`);