class Aluno {
    constructor(nome, nota){
        this.nome = nome;
        this.nota = nota;
    }
    apresentar(){
        console.log(`${this.nome}:${this.nota}`);
    }
}
const alunos = [
    new Aluno("Carlos",8),
    new Aluno("Mariana",9),
    new Aluno("Paula",7)
];
alunos.forEach((aluno) => {
    aluno.apresentar();
});
alunos.push(new Aluno("Rafael,10"));
console.log("--- Com o quarto aluno ---");
alunos.forEach((aluno) => {
    aluno.apresentar();

});
