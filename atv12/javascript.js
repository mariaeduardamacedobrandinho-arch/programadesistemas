// 1. Array inicial
const produtos = [
    { codigo: 1, nome: "Teclado Mecânico", preco: 250.00 },
    { codigo: 2, nome: "Mouse Gamer", preco: 150.00 },
    { codigo: 3, nome: "Monitor 24'", preco: 899.90 }
];
console.log("1. Inicial:", produtos);

// 2. Adicionar quarto produto (push)
produtos.push({ codigo: 4, nome: "Headset Bluetooth", preco: 320.00 });
console.log("2. Após push:", produtos);

// 3. Pesquisar produto (find) - Evitando erro comum com Number()
const codigoPesquisa = "2"; 
const produtoEncontrado = produtos.find(p => p.codigo === Number(codigoPesquisa));
console.log("3. Encontrado:", produtoEncontrado);

// 4. Atualizar preço
const produtoParaAtualizar = produtos.find(p => p.codigo === 1);
if (produtoParaAtualizar) {
    produtoParaAtualizar.preco = 220.00;
}
console.log("4. Preço atualizado:", produtoParaAtualizar);

// 5. Nova lista filtrada (filter)
const novaListaProdutos = produtos.filter(p => p.codigo !== 3);
console.log("5. Sem o produto 3:", novaListaProdutos);

// 6. Valor total (reduce)
const valorTotal = produtos.reduce((acumulador, produto) => acumulador + produto.preco, 0);
console.log("6. Valor total: R$", valorTotal.toFixed(2));
