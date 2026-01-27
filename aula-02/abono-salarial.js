// Importa o módulo e o armazena na constante 
const input = require("readline-sync");

// Entrada de dados
let salary = input.questionFloat("Salário: R$ ");
let salaryBonus = input.questionFloat("Abono: R$ ");

// Calculo do novo salário
salary += salaryBonus;

// Cria um formatador de moeda brasileira
const fmt = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

// Exibição do resultado
console.log("Novo salário:", fmt.format(salary));