// Crie uma classe chamada “Triângulo” com atributos para armazenar os três lados do triângulo. Implemente métodos para verificar se é um triângulo válido e calcular sua área.



function Triangulo(base,altura,area){
     this.base = base;
     this.altura = altura;
     this.area = area;
     this.calculo = function(){
          this.area = (base*altura)/2;
          console.log(`seu triangulo tem essas proporçoes  ${this.area}`);
     }
}






let novotriangulo = new Triangulo(40,60);
novotriangulo.calculo();
console.log(novotriangulo.area);





