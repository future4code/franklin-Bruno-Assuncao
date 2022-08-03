// 1 a) como fazemos para acessar os parâmetros passados na linha de comando para o Node?
// Usamos o process.argv com o valor da sua posição dentro de []

// //b
// console.log("Olá,", process.argv[2], "! Você tem", process.argv[3], "anos.");

// //c
// const idade = Number(process.argv[3]);
// console.log(
//   "Olá,",
//   process.argv[2],
//   "! Você tem",
//   idade,
//   "anos. Em sete anos você terá",
//   idade + 7
// );

//2
// const operacao = process.argv[2];
// switch (operacao) {
//   case "soma":
//     console.log(Number(process.argv[3]) + Number(process.argv[4]));
//     break;
//   case "sub":
//     console.log(Number(process.argv[3]) - Number(process.argv[4]));
//     break;
//   case "mult":
//     console.log(Number(process.argv[3]) * Number(process.argv[4]));
//     break;
//   case "div":
//     console.log(Number(process.argv[3]) / Number(process.argv[4]));
//     break;
// }

// 3
console.log("Tarefa adicionada com sucesso!");
console.log(["Lavar louça", process.argv[2]]);
