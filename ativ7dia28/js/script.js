const mensagem = document.querySelector("#mensagem");
const botao = document.querySelector("#botao_teste");
const formulario = document.querySelector("#form_produto");

if (botao && mensagem) {
    botao.addEventListener("click", () => {
        mensagem.textContent =
            "DOM funcionando! A interface respondeu ao clique.";
    });
}

if (formulario) {
    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();
    });
}
