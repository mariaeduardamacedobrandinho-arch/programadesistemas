// Classe Produto
class Produto {
    constructor(nome, preco, categoria) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
    }

    exibirDetalhes() {
        console.log(`Produto: ${this.nome}`);
        console.log(`Preço Original: R$ ${this.preco.toFixed(2)}`);
        console.log(`Categoria: ${this.categoria}`);
    }

    calcularDesconto(porcentagem) {
        if (porcentagem < 0 || porcentagem > 100) {
            console.log("Porcentagem de desconto inválida.");
            return this.preco;
        }
        const desconto = this.preco * (porcentagem / 100);
        const precoFinal = this.preco - desconto;
        console.log(`Desconto de ${porcentagem}%: R$ ${desconto.toFixed(2)} | Preço Final: R$ ${precoFinal.toFixed(2)}`);
        return precoFinal;
    }
}


const produto1 = new Produto("Smartphone Galaxy", 2500.00, "Eletrônicos");
const produto2 = new Produto("Tênis de Corrida", 450.00, "Calçados");


console.log("--- TESTANDO PRODUTO 1 ---");
produto1.exibirDetalhes();
produto1.calcularDesconto(0);   
produto1.calcularDesconto(10);  
produto1.calcularDesconto(20);  
console.log("");


console.log("--- TESTANDO PRODUTO 2 ---");
produto2.exibirDetalhes();
produto2.calcularDesconto(0);  
produto2.calcularDesconto(10);  
produto2.calcularDesconto(20);  
