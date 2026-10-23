class Funcionario {
    constructor(nome, cargo, salario) {
        
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }

    apresentar() {
        
        console.log(`Funcionário(a): ${this.nome} | Cargo: ${this.cargo} | Salário: R$ ${this.salario}`);
    }
}


const funcionario1 = new Funcionario("Ana Silva", "Desenvolvedora", 5500);
const funcionario2 = new Funcionario("Carlos Souza", "Gerente de Projetos", 8200);


funcionario1.apresentar();
funcionario2.apresentar();

