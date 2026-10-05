import { number } from "@inquirer/prompts";

let litros_abastecidos = 0;

const limite = await number({
    message: "Quantos litros meu patrão? "
})

while (litros_abastecidos <= limite){
    console.log(`Litros: ${litros_abastecidos} L | Subtotal: R$ ${5.8*litros_abastecidos}`)
    litros_abastecidos += 5
    // litros_abastecidos = litros_abastecidos + 5
}

const cashback = ((litros_abastecidos-5) >= 30 ) 
? "Parabéns, vc ganhou cashback!" 
: `Faltam ${30-(litros_abastecidos-5)}L para voce ganhar cashback`

console.log(cashback);