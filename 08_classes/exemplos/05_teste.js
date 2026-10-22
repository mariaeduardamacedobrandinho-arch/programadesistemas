class Cliente { // 1. Boa prática: Iniciar nome de classe com letra maiúscula
    constructor(nome, banco, saldo) { // 2. Removida a vírgula sobressalente
        this.nome = nome;
        this.banco = banco;   // 3. Corrigido de this.preco para this.banco
        this.saldo = saldo;   // 4. Corrigido de this.desconto para this.saldo
    }

    apresentar() {
        console.log(`${this.nome}: R$ ${this.banco} ${this.saldo}`);
    }

    // 5. Movido para dentro da classe
    exibirCliente() { // Boa prática: Usar camelCase (exibirCliente)
        console.log(`Cliente: ${this.nome}`);
        console.log(`Banco: ${this.banco}`);
        console.log(`Saldo: R$ ${this.saldo}`);
    }

    // 6. Movido para dentro da classe
    correcaoSaldo(porcentagem) {
        return this.saldo * (1 + porcentagem / 100);
    }
}

// 7. Corrigido de "nem cliente" para "new Cliente" e o nome da constante para "cliente1"
const cliente1 = new Cliente("dudinha", "bradesco", 12500);
cliente1.exibirCliente();

console.log("saldo atual R$",cliente1.correcaoSaldo(5))