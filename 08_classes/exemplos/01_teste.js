class Aluno {
    constructor(nome) {
        this.nome = nome;
    }

    apresentar() {
        console.log(`Meu nome é ${this.nome}`);
    }
}

const aluno1 = new Aluno("thor");
const aluno2 = new Aluno("duda");
const aluno3 = new Aluno("lucas");

aluno1.apresentar();
aluno2.apresentar();
aluno3.apresentar();