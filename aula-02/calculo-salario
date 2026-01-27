// Importa o módulo e o armazena na constante 
const input = require("readline-sync");

// Entrada de dados
let grossSalary = input.questionFloat("Salário bruto: R$ ");
let nightPay = input.questionFloat("Adicional noturno: R$ ");
let overtimeHours = input.questionInt("Horas extras: ");
let deductions = input.questionFloat("Descontos: R$ ");

// Cálculo do valor das horas extras (R$ 5,00/hora)
let overtimePay = overtimeHours * 5;

// Cálculo do salário líquido
let netSalary = grossSalary + nightPay + overtimePay - deductions;

// Cria um formatador de moeda brasileira
const fmt = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

// Exibição do resultado
console.log("Salário líquido:", fmt.format(netSalary));
