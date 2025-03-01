// Implemente uma classe chamada “Carro” com atributos para armazenar a marca, o modelo e a velocidade atual do carro. Adicione métodos para acelerar, frear e exibir a velocidade atual.


function Carro(marca,modelo,velocidade){
     this.marca = marca;
     this.modelo = modelo;
     this.velocidade = velocidade;
     this.acelerar = function(){
          this.velocidade += 10
          console.log('sua velocidade atual é', + this.velocidade);
     };
     this.frear = function(){
          this.velocidade -= 40;
          console.log('vc teve que reduzir', + this.velocidade);
     };

     this.radar = function(){
          if(this.velocidade > 50){
               console.log('vc foi multado passou acima do limite permitido', + this.velocidade);
          }
     }
}



let carro1 = new Carro('toyota', 'corola',140);
console.log(carro1.modelo);
console.log(carro1.marca);
carro1.acelerar();
carro1.frear();
carro1.radar();