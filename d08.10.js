import { input, number } from '@inquirer/prompts';

let produtos = ["Mouse", "Teclado", "Monitor"]; // Cria a lista inicial.
console.log(produtos); // Mostra a lista inicial.
console.log(produtos[0]); // Mostra Mouse.
console.log(produtos[1]); // Mostra Teclado.
console.log(produtos[2]); // Mostra Monitor.
produtos[1] = "Notebook"; // Altera o segundo produto.
console.log(produtos); // Mostra a lista alterada.
console.log(produtos.length); // Mostra a quantidade de produtos.
produtos.push("Impressora"); // Adiciona um produto ao final.
console.log(produtos); // Mostra a lista com quatro produtos.
produtos.pop(); // Remove o último produto.
console.log(produtos); // Mostra a lista após a remoção.
for (let i = 0; i < produtos.length; i++) { // Percorre a lista.
console.log(produtos[i]); // Exibe cada produto.
} // Finaliza a repetição.
for (let i = 0; i < produtos.length; i++) { // Percorre novamente a lista.
if (produtos[i] === "Notebook") { // Procura o produto Notebook.
console.log("Notebook encontrado!"); // Mostra a mensagem.
} // Encerra o if.
} // Encerra o for.