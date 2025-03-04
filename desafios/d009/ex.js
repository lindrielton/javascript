// Crie uma classe chamada “Paciente” que possua atributos para armazenar o nome, a idade e o histórico de consultas de um paciente. Implemente métodos para adicionar uma nova consulta ao histórico e exibir as consultas realizadas.


function paciente(nome,idade,historico,consultas){
 this.nome = nome;
 this.idade = idade;
 this.historico = historico;
 this.consultas = consultas;
 this.listaHisto = function(){
     this.historico += 1;
     console.log('seu numeros de historicos é igual a ,' + this.historico);
 }
}

let novoPaciente = new paciente('douglas', 30, 5,  );
novoPaciente.listaHisto()