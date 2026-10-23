class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    apresentar() {
        console.log(`${this.nome}: R$ ${this.preco}`);
    }
}

const produto1 = new Produto("ouro",450000);
const produto2 = new Produto("prata",25000);
const produto3 = new Produto("rubi", 70000);

produto1.apresentar();
produto2.apresentar();
produto3.apresentar();
