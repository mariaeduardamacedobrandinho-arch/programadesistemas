import {number} from '@inquirer/prompts';
const numero_digitado = await number ({ message: "Digite um numero paa a tabuada"

})

console.log(`tabuada do ${numero_digitado}`)
console.log("=".repeat(15))

for (let i = 1; i <= 10; i++){
 console.log(`${i} x ${numero_digitado} = ${i*numero_digitado}`)

}