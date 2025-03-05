// Crie uma classe chamada “Paciente” que possua atributos para armazenar o nome, a idade e o histórico de consultas de um paciente. Implemente métodos para adicionar uma nova consulta ao histórico e exibir as consultas realizadas.


function paciente(nome,idade,historico,consultas){
 this.nome = nome;
 this.idade = idade;
 this.historico = historico;
 this.consultas = consultas;
 this.listaHisto = function(){
     this.historico += 1;
     console.log(`o passiente ${this.nome} de idade ${this.idade} tem esse valor de consultas ${this.historico}`);
 };
 this.valorDeconsultas = function(){
    this.numeroConsultas = this.historico ;
    console.log(`o valor que vc tem a pagar é  ${this.numeroConsultas*100}`);
 }
}

let novoPaciente = new paciente('douglas', 30, 5,  );
novoPaciente.listaHisto();

novoPaciente.valorDeconsultas();