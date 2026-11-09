// 1. Seleciona o campo de texto
const campo = document.querySelector("#nome");

// 2. Seleciona o botão
const botao = document.querySelector("#botao");

// 3. Executa uma ação ao clicar
botao.addEventListener("click", () => {

    // 4. Pega o nome digitado
    const nome = campo.value.trim();

    // 5. Mostra o nome na tela
    alert(nome);
    
}); // <- O erro acontecia porque faltava esta linha para fechar o addEventListener
