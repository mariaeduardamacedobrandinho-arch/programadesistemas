class Cliente { 
    constructor(nome, banco, saldo) { 
        this.nome = nome;
        this.banco = banco;   
        this.saldo = saldo;   
    }

    apresentar() {
        console.log(`${this.nome}: R$ ${this.banco} ${this.saldo}`);
    }

    
    exibirCliente() { 
        console.log(`Cliente: ${this.nome}`);
        console.log(`Banco: ${this.banco}`);
        console.log(`Saldo: R$ ${this.saldo}`);
    }

    // 6. Movido para dentro da classe
    correcaoSaldo(porcentagem) {
        return this.saldo * (1 + porcentagem / 100);
    }
}


const cliente1 = new Cliente("dudinha", "bradesco", 12500);
cliente1.exibirCliente();

console.log("saldo atual R$",cliente1.correcaoSaldo(5))