// Crie uma classe chamada “Funcionário” com atributos para armazenar o nome, o salário e o cargo do funcionário. Implemente métodos para calcular o salário líquido, considerando descontos de impostos e benefícios.

function funcionario(nome,salario,cargo,desconto,Sfamilia){
   this.nome = nome ;
   this.salario = salario; 
   this.cargo = cargo;
   this.desconto = desconto
   this.Sfamilia = Sfamilia
   this.liquido = function(){
         let salarioReal = (this.salario - this.desconto) + this.Sfamilia;
         console.log(`o salario que vc tem menos os descontos e acrecimos do salario familia é ${salarioReal}`)
         
         
   }
}

let empregado = new funcionario('elton', 1800, 'tecnico', 113, 65);
empregado.liquido();

