// Crie uma classe chamada “Círculo” que possua um atributo para armazenar o raio e métodos para calcular a área e o perímetro do círculo.


// comprimento  c = 2.p.r
// area a = p.a*a



function areaCirculo(raio, pi){
        this.raio = raio;
        this.pi = pi;
        this.calculo = function(){
           return  this.pi*(this.raio*this.raio);
 }

}


let matematica1 = new areaCirculo(5, 3.14);
console.log(matematica1.raio);
console.log(matematica1.pi);
console.log(matematica1.calculo());
