class Produto {
    #quantidade = 0;

    get quantidade() {
        return this.#quantidade;
    }

  
    set quantidade(novaQuantidade) {
        if (typeof novaQuantidade !== 'number' || novaQuantidade < 0 || Number.isNaN(novaQuantidade)) {
            console.error("Erro: A quantidade deve ser um número maior ou igual a zero.");
            return;
        }
        this.#quantidade = novaQuantidade;
    }

    
    repor(quantidade) {
        if (quantidade <= 0) {
            console.error(`Erro: Não é possível repor uma quantidade negativa ou nula (${quantidade}).`);
            return;
        }
        this.quantidade = this.#quantidade + quantidade;
    }
}



const meuProduto = new Produto();
console.log(`Estoque inicial: ${meuProduto.quantidade}`); 

console.log("\n--- Testando reposição válida ---");
meuProduto.repor(15); 
console.log(`Estoque após reposição válida: ${meuProduto.quantidade}`); 

console.log("\n--- Testando reposição inválida ---");
meuProduto.repor(-5); 
console.log(`Estoque após tentativa inválida: ${meuProduto.quantidade}`);
