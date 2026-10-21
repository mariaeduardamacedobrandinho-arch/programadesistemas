class Funcionario {
    constructor(nome, cargo) {
        this.nome = nome;
        this.cargo = cargo;
    }

    apresentar() {
        console.log(`${this.nome} - ${this.cargo}`);
    }
}

const funcionario1 = new Funcionario(
    "dudinha",
    "atendente"
);

const funcionario2 = new Funcionario(
    "luan",
    "Gerente"
);

funcionario1.apresentar();
funcionario2.apresentar();
