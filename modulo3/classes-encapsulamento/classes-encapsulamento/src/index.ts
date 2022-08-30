//EXERCICIO 1 =============================================
// a) O construtor é uma função que recebe atributos para instanciar e inicializar uma classe
// constructor (parametro: tipo){
//     this.nomeDoAtributo = parametro
// }
// b) Ele imprime apenas uma vez no console

// c) Para ter acesso as propriedades privadas precisamos criar uma função chamada get de modo public
// para pegar as informaçoes (atributo) e passar o this para chamar o atributo.

//EXERCICIO 2 =============================================
class Transaction {
  private date: string;
  private value: number;
  private description: string;

  constructor(date: string, value: number, description: string) {
    this.date = date;
    this.value = value;
    this.description = description;
  }

  public getDate() {
    this.date;
  }

  public getValue() {
    this.value;
  }

  public getDescription() {
    this.description;
  }
}
class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(cpf: string, name: string, age: number) {
    // console.log("Chamando o construtor da classe UserAccount");
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }

  public getcpf() {
    this.cpf;
  }
  public getName() {
    this.name;
  }
  public getAge() {
    this.age;
  }
  public getTransactions() {
    this.transactions;
  }

  public setTransactions() {
    newTransactions: [];
  }
}

const bruno = new UserAccount("cpf", "Bruno Pereira", 25);
const saldoBruno = new Transaction("2022-08-30", 100, "Deposito");

//EXERCICIO 3 =============================================

class Bank {
  private accounts: UserAccount[];

  constructor(accounts: UserAccount[]) {
    this.accounts = accounts;
  }

  public getAccounts() {
    this.accounts;
  }
}

const contaBruno = new Bank([bruno]);

console.log(contaBruno.getAccounts)