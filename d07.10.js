import { input, number } from '@inquirer/prompts';

const quantidadeProdutos = await number({
    message: 'Quantos produtos serão cadastrados?',
    min: 1,
    required: true
});

let contador = 1;

let totalPrecos = 0;

let baratos = 0;
let medios = 0;
let caros = 0;

while (contador <= quantidadeProdutos) {

    const nomeProduto = await input({
        message: `Digite o nome do produto ${contador}:`
    });

    const precoProduto = await number({
        message: `Digite o preço de ${nomeProduto}:`,
        min: 0,
        required: true
    });

    totalPrecos += precoProduto;

    if (precoProduto <= 50) {

        console.log(`${nomeProduto} é BARATO`);
        baratos++;

    } else if (precoProduto <= 100) {

        console.log(`${nomeProduto} é MÉDIO`);
        medios++;

    } else {

        console.log(`${nomeProduto} é CARO`);
        caros++;
    }

    contador++;
}

console.log("----- RESUMO FINAL -----");

console.log(`Total dos preços: R$ ${totalPrecos.toFixed(2)}`);
console.log(`Produtos baratos: ${baratos}`);
console.log(`Produtos médios: ${medios}`);
console.log(`Produtos caros: ${caros}`);





