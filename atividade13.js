const notas = [ // Cria a matriz com três linhas e quatro colunas.
[8, 7, 6, 9], // Define os valores da linha 0.
[6, 9, 10, 5], // Define os valores da linha 1.
[7, 8, 9, 6] // Define os valores da linha 2.
]; // Finaliza a matriz.
function somarMatriz(matriz) { // Recebe uma matriz e calcula a soma.
let soma = 0; // Inicializa o acumulador.
for (let i = 0; i < matriz.length; i++) { // Percorre as linhas.
for (let j = 0; j < matriz[i].length; j++) { // Percorre as colunas da linha atual.
soma += matriz[i][j]; // Adiciona o elemento à soma.
} // Finaliza o laço das colunas.
} // Finaliza o laço das linhas.
return soma; // Devolve a soma dos elementos.
} // Finaliza a função de soma.
function mediaMatriz(matriz) { // Recebe a matriz para calcular a média.
let quantidade = 0; // Inicializa o contador de elementos.
for (let i = 0; i < matriz.length; i++) { // Percorre as linhas.
quantidade += matriz[i].length; // Conta os elementos de cada linha.
} // Finaliza a contagem.
return somarMatriz(matriz) / quantidade; // Devolve soma dividida pela quantidade.
} // Finaliza a função de média.
function maiorValor(matriz) { // Recebe a matriz para encontrar o maior número.
let maior = matriz[0][0]; // Usa o primeiro elemento como referência.
for (let i = 0; i < matriz.length; i++) { // Percorre as linhas.
for (let j = 0; j < matriz[i].length; j++) { // Percorre as colunas.
if (matriz[i][j] > maior) { // Verifica se encontrou valor maior.
maior = matriz[i][j]; // Atualiza o maior valor.
} // Finaliza a comparação.
} // Finaliza o laço das colunas.
} // Finaliza o laço das linhas.
return maior; // Devolve o maior número encontrado.
} // Finaliza a função de maior valor.
function menorValor(matriz) { // Recebe a matriz para encontrar o menor número.
let menor = matriz[0][0]; // Usa o primeiro elemento como referência.
for (let i = 0; i < matriz.length; i++) { // Percorre as linhas.
for (let j = 0; j < matriz[i].length; j++) { // Percorre as colunas.
if (matriz[i][j] < menor) { // Verifica se encontrou valor menor.
menor = matriz[i][j]; // Atualiza o menor valor.
} // Finaliza a comparação.
} // Finaliza o laço das colunas.
} // Finaliza o laço das linhas.
return menor; // Devolve o menor número encontrado.
} // Finaliza a função de menor valor.
console.log('Soma:', somarMatriz(notas)); // Exibe a soma.
console.log('Média:', mediaMatriz(notas).toFixed(2)); // Exibe a média com duas casas.
console.log('Maior valor:', maiorValor(notas)); // Exibe o maior valor.
console.log('Menor valor:', menorValor(notas)); // Exibe o menor valor.