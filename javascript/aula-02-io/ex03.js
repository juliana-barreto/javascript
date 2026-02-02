// Importa o módulo e o armazena na constante 
const input = require("readline-sync");

// Entrada de dados
const grossSalary = input.questionFloat("Salário bruto: R$ ");
const nightPay = input.questionFloat("Adicional noturno: R$ ");
const overtimeHours = input.questionInt("Horas extras: ");
const deductions = input.questionFloat("Descontos: R$ ");

// Cálculo do valor das horas extras (R$ 5,00/hora)
const overtimePay = overtimeHours * 5;

// Cálculo do salário líquido
const netSalary = grossSalary + nightPay + overtimePay - deductions;

// Cria um formatador de moeda brasileira
const fmt = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

// Exibição do resultado
console.log("Salário líquido:", fmt.format(netSalary));
