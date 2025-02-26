//Implemente uma classe chamada “ContaBancária” que possua atributos para armazenar o número da conta, nome do titular e saldo. Adicione métodos para realizar depósitos e saques

let contaBancaria = {

    numeroConta: 2222-8888,
    nome: 'lucas',
    saldo: 1000,
    depositar(){
       this.saldo += 30;
        console.log(`${this.nome} vc tem  ${this.saldo} de saldo`);
       
    },
    sacar(){
       
           this.saldo -= 50;
            console.log(`${this.nome} vc tem  ${this.saldo}  de saudo`);
        


    }


} 

contaBancaria.depositar();
contaBancaria.sacar();