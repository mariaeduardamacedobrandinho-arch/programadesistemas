import { select } from "@inquirer/prompts";
CONST plano = await select({
message:'selecione seu curs:',
choices:[
{curso:'Administração(tempo de curso 1ano)' , value:'a'},
{curso:'Ciências Contábeis(tempo de curso 1ano e 1meses)' , value:'c'}
{curso:'Gestão de Recursos Humanos(tempo de curso 5meses)' , value:'G'},
]
});

switch (curso){
    case'a':
    console.log("o curso de administraçao selecionado:R$ 661,75")