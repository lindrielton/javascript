// Implemente uma classe chamada “Produto” que possua atributos para armazenar o nome, o preço e a quantidade em estoque. Adicione métodos para calcular o valor total em estoque e verificar se o produto está disponível.


function produto(nome, preco, quantidade){
         this.nome = nome;
         this.preco = preco;
         this.quantidade = quantidade;
         this.list = function(){
             if(quantidade === undefined){
                  console.log('seu produto está em falta ou não foi lançado no sistema');
             }else{
                  console.log(`vc tém ${this.quantidade} é já está disponivel no seu estoque`);
             }
         }
         this.retirado = function(valor){
             this.quantidade -= valor;
              console.log(`sua quantia mudou agora vc só tem ${this.quantidade} sobrando`);
         }
}

let fardo = new produto('arroz', 6.00 ,  40);
fardo.list();
fardo.retirado(5);


