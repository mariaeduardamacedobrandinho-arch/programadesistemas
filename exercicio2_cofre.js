import {number} from '@inquirer/prompts';

const tentativas_restantes = await number({ message:'digite sua senha:'});

if(idade >= 18){console.log("entrada liberada: bem-vido ao evento.");   
} else {
console.log ("entrada bloqueada: evento restrito para maiores de 18 anos.");}