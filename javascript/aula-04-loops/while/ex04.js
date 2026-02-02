const input = require("readline-sync");

let ageSum = 0;
let backendDevCount = 0;
let womenFrontendCount = 0;
let menMobileOver40Count = 0;
let nonBinaryFullStackUnder30Count = 0;
let totalPeople = 0;

while (true) {

  const age = input.questionInt("Digite a Idade: ");

  console.log("\nIdentidade de Gênero:");
  console.log("1 - Mulher Cis");
  console.log("2 - Homem Cis");
  console.log("3 - Não Binário");
  console.log("4 - Mulher Trans");
  console.log("5 - Homem Trans");
  console.log("6 - Outros");

  const genderIdentity = input.questionInt("Escolha uma opção (1-6): ");

  if (genderIdentity < 1 || genderIdentity > 6) {
    console.log("\nResposta inválida.");
    break;
  }

  console.log("\nÁrea de Atuação:");
  console.log("1 - Backend");
  console.log("2 - Frontend");
  console.log("3 - Mobile");
  console.log("4 - Full Stack");

  const role = input.questionInt("Escolha uma opção (1-4): ");

  if (role < 1 || role > 4) {
    console.log("\nResposta inválida.");
    break;
  }

  // Se não houve quebra do loop, acumula os dados

  ageSum += age;
  totalPeople++;

  // Checagens para as estatísticas

  if (role == 1) {
    backendDevCount++;
  }

  if ((genderIdentity == 1 || genderIdentity == 4) && (role == 2)) {
    womenFrontendCount++;
  }

  if ((genderIdentity == 2 || genderIdentity == 5) && (role == 3) && (age > 40)) {
    menMobileOver40Count++;
  }

  if (genderIdentity == 3 && (role == 4) && (age < 30)) {
    nonBinaryFullStackUnder30Count++;
  }

  // Pergunta se o usuário quer continuar
  const answer = input.question("\nDeseja continuar? (s/n): ").toLowerCase();
  if (answer !== 's') {
    break;
  }

  // Limpa a tela para a próxima iteração
  console.log('\x1Bc');
}

// Exibição dos resultados
if (totalPeople == 0) {
  console.log("\nNenhuma pessoa respondeu à pesquisa.");
} else {
  // Limpa a tela antes de mostrar os resultados
  console.log('\x1Bc');
  console.log("\n=== Resultados ===");
  console.log(`Total de pessoas desenvolvedoras Backend: ${backendDevCount}`);
  console.log(`Total de mulheres desenvolvedoras Frontend: ${womenFrontendCount}`);
  console.log(`Total de homens desenvolvedores Mobile com mais de 40 anos: ${menMobileOver40Count}`);
  console.log(`Total de pessoas não binárias desenvolvedoras Full Stack com menos de 30 anos: ${nonBinaryFullStackUnder30Count}`);
  console.log(`Total de pessoas que responderam à pesquisa: ${totalPeople}`);
  const averageAge = ageSum / totalPeople;
  console.log(`Média de idade das pessoas que responderam à pesquisa: ${averageAge.toFixed(2)}`);
}