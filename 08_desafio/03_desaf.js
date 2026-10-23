// Arquivo: desafios/desafio_03.js

class Categoria {
   
    constructor(nome) {
        this.nome = nome;
    }

   a
    apresentar() {
        console.log(`Categoria de Produto: ${this.nome}`);
    }
}


const categoria1 = new Categoria("Eletrônicos");
const categoria2 = new Categoria("Roupas");
const categoria3 = new Categoria("Alimentos");

categoria1.apresentar();
categoria2.apresentar();
categoria3.apresentar();