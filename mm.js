import {number} from '@inquirer/prompts';

const idade = await number({ message:'digite sua idade:'});

if(idade >= 18){console.log("entrada liberada: bem-vido ao evento.");   
} else {
console.log ("entrada bloqueada: evento restrito para maiores de 18 anos.");}