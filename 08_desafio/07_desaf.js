class Cliente {
    construtor(nome) {
        this.nome = nome;
    }

    apresentar() {
        console.log(this.nome);
    }
}

const cliente = new Cliente("Paula");
cliente.apresentar();
