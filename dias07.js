import { input, number } from '@inquirer/prompts';

import inquirer from "inquirer";
let total = 0;
let qtdBarato = 0; 
let qtdMedio = 0; 
let qtdCaro = 0;
const resposta = await inquirer.prompt([ 
{
type: "input", 
name: "n", 
message: "Quantos produtos serão registrados?" 
}
]);
const n = Number(resposta.n); 

for (let i = 1; i <= n; i++) { 
const dados = await inquirer.prompt([ 
{
type: "input", 
name: "nome", 
message: `Nome do produto ${i}:` 
},
{
type: "input", 
name: "preco", 
message: "Preço (R$):" 
}
]);
const preco = Number(dados.preco); 
total += preco; 
if (preco <= 50) { 
qtdBarato++; 
} else if (preco <= 100) { 
qtdMedio++; 
} else { 
qtdCaro++; 
}
}
console.log("\n--- RESUMO DA COMPRA ---"); 
console.log(`Total gasto: R$ ${total.toFixed(2)}`); 
console.log(`Produtos baratos: ${qtdBarato}`); 
console.log(`Produtos médios: ${qtdMedio}`); 
console.log(`Produtos caros: ${qtdCaro}`);