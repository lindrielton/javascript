// Implemente uma classe chamada “Aluno” que possua atributos para armazenar o nome, a matrícula e as notas de um aluno. Adicione métodos para calcular a média das notas e verificar a situação do aluno (aprovado ou reprovado).

function Aluno(nome, matricula, nota1, nota2, soma){
         this.nome = nome;
         this.matricula = matricula;
         this.nota1 = nota1;
         this.nota2 = nota2;
         this.soma = soma
         this.media = function (){
            this.soma =  (this.nota1+this.nota2) / 2;
            if(this.soma > 6 ){
               console.log('vc foi aprovado com media superior a 5');
            }else{
               console.log('infelizmente vc foi reprovado');
            }
         }
      this.infomacoes = function(){
         console.log(`seu nome: ${this.nome} sua matricula: ${this.matricula}`)
      }
}



aluno1 = new Aluno('elton', 5445444, 5, 5);
aluno1.media();
console.log(aluno1.soma);
aluno1.infomacoes();