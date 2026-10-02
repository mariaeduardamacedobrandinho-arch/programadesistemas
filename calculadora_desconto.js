import { number, select } from "@inquirer/prompts";

const valor_total = await number ({
message: 'digite o valor total da compra:',
min: 0,
step: 'any'
});
const pagamento = await select({
message: "escolha a forma de pagamento:",
choices:[
    {nome: "pix (10% de desconto)", value:"pix"},
    {nome: "cartÂo á vista(5% de cosconto)", value: "avista"},
    {nome:"cartão parcelado(sem desconto)", value: "parcelado"},
]
});

let valor_descontado;

//switch (pagamento){
   //default:
        //console.log("opção inválida!")
        //break;
        //case "pix":
            //valor_descontado = valor_total * 0.9
        //break;
        //case "avista":
            //valor_descontado = valor_total * 0.95
        //break;
        //case "parcelado": 
        //valor_descontado = valor_total * 1
        //break;
//}
if (pagamento === "pix"){ 
   
    valor_descontado = valor_total * 0.9

}else if (pagamento === "awista"){
    
    valor_descontado = valor_total  * 0.95

}else if (pagamento === "parcelado"){
    
    valor_descontado = valor_total  * 1
}else{
     
    console.log("opção inválida!")
}

console.log(`de acordo com a opção de pagamento,`)
console.log(` o valor a ser pago é de R$ ${valor_descontado}`)

