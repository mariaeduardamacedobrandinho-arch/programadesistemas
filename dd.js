import {input, number} from '@inquirer/prompts';
const nome = await input({ message:'Qual o seu nome?'});
let idade = await number ({
    message: 'idade',
    min: 0,
    max: 120,
    required: true,})

let idade_depois = idade + 1;
// console.log(typeof idade);
// console.log(typeof idade_depois);
console.log("bem vindo," + nome + "!");
console.log("ano que vem vc terá " + idade_depois + " anos.");