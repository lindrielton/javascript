//Crie uma classe chamada “Retângulo” que possua atributos para armazenar a largura e a    altura.        Implemente métodos para calcular a área e o perímetro do retângulo. 

function Retangulo(largura,altura){
   this.largura = largura;
   this.altura = altura;
   this.area =  function() {
      return this.altura*this.largura;
   };
   this.perimetro = function(){
      return 2*(this.altura+this.largura);
   }


}

let novoRetangulo =  new  Retangulo(7,3);
console.log(novoRetangulo.area());
console.log(novoRetangulo.perimetro());