// Arquivo: desafios/desafio_02.js

class Aluno {
    
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    
    apresentar() {
        console.log(`Aluno: ${this.nome} | Idade: ${this.idade} anos`);
    }
}


const aluno1 = new Aluno("Duda", 22);


aluno1.apresentar();
