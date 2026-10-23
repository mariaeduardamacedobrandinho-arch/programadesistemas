class Produto {
    constructor(preco, quantity) {
        this.preco = preco;
        this.quantidade = quantity;
    }

    calcularTotal() {
        
        return this.preco * this.quantidade;
    }
}


const produto1 = new Produto(150.00, 3); 


console.log(`Preço unitário: R$ ${produto1.preco}`);
console.log(`Quantidade comprada: ${produto1.quantidade}`);
console.log(`Valor Total: R$ ${produto1.calcularTotal()}`);
