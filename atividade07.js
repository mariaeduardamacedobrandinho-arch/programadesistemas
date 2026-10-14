const produtos = ["Mouse", "Teclado", "Monitor", "Webcam", "Impressora"]; // Cria a lista de nomes.
const precos = [50, 120, 850, 180, 600]; // Cria os preços na mesma ordem.
console.log("1. Quantidade:", produtos.length); // Mostra o total de produtos.
console.log("\n2. Produtos e preços:"); // Mostra o título da listagem.
for (let i = 0; i < produtos.length; i++) { // Percorre todos os produtos.
console.log(`${i + 1}. ${produtos[i]} - R$ ${precos[i].toFixed(2)}`); // Mostra número, nome e preço.
} // Finaliza a listagem.
console.log("\n3. Webcam cadastrada?", produtos.includes("Webcam") ? "Sim" : "Não"); // Verifica se Webcam existe.
console.log("Webcam inexistente?", produtos.includes("Webcam Pro") ? "Sim" : "Não"); // Testa um nome inexistente.
console.log("4. Índice de Monitor:", produtos.indexOf("Monitor")); // Encontra a posição do Monitor.
const indiceTeclado = produtos.indexOf("Teclado"); // Localiza o Teclado.
if (indiceTeclado !== -1) { // Confere se ele foi encontrado.
precos[indiceTeclado] = 135; // Atualiza o preço para R$ 135.
} // Encerra a verificação.
console.log("5. Novo preço do Teclado: R$", precos[indiceTeclado].toFixed(2)); // Confirma o novo preço.
produtos.push("Headset"); // Adiciona Headset à lista de nomes
precos.push(220); // Adiciona o preço correspondente.
console.log("6. Produto adicionado:", produtos[produtos.length - 1]); // Mostra o último nome.
const removido = produtos.pop(); // Remove o último nome cadastrado.
precos.pop(); // Remove também seu preço.
console.log("7. Produto removido:", removido); // Informa o produto removido.
console.log("\n8. Produtos com preço a partir de R$ 200:"); // Mostra o título do filtro.
for (let i = 0; i < produtos.length; i++) { // Percorre os preços atuais.
if (precos[i] >= 200) { // Seleciona valores de R$ 200 ou mais.
console.log(`${produtos[i]} - R$ ${precos[i].toFixed(2)}`); // Exibe os produtos selecionados.
} // Encerra a condição.
} // Encerra a repetição.
let soma = 0; // Inicia o acumulador de preços.
for (let i = 0; i < precos.length; i++) { // Percorre os preços cadastrados.
soma += precos[i]; // Adiciona cada preço à soma.
} // Encerra a soma.
console.log("\n9. Soma dos preços: R$", soma.toFixed(2)); // Mostra o total.
const nomesOrdenados = [...produtos].sort(); // Ordena uma cópia, sem alterar os arrays originais.
console.log("\n10. Nomes em ordem alfabética:"); // Mostra o título da ordenação.
for (let i = 0; i < nomesOrdenados.length; i++) { // Percorre os nomes ordenados.
console.log(nomesOrdenados[i]); // Mostra um nome por linha.
} // Encerra a listagem alfabética.
const media = soma / precos.length; // Calcula a média dos preços (desafio opcional).
console.log("\nExtra. Preço médio: R$", media.toFixed(2)); // Mostra a média com duas casas.