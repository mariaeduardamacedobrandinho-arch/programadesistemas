//class Produto {
    //constructor(nome, preco) {
      //  this.nome = nome;
        //this.preco = preco;
    //}
//}

//const produto1 = new Produto("ouro", 50);
//const produto2 = new Produto("diamante", 80);

//console.log(produto1.nome);
//console.log(produto2.nome);

class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    calcularDesconto(percentual) {
        return this.preco * (1 - percentual / 100);
    }

    apresentar() {
        console.log(`Produto: ${this.nome}`);
        console.log(`Preço: R$ ${this.preco}`);
    }
}

const produto = new Produto("ouro", 1000);

produto.apresentar();

console.log(
    "Preço com desconto:",
    produto.calcularDesconto(10)
);
