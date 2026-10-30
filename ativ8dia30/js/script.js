        const caixa1 = document.querySelector("#caixatxt1");
        const caixa2 = document.querySelector("#caixatxt2");
        const botao1 = document.querySelector("#bt1");
        const botao2 = document.querySelector("#bt2");
        const botaolimpar = document.querySelector("#limpar");
        
        
        botao1.addEventListener("click", () => {

           //alert("Clicou no botão 1")
           caixa1.textContent="antes só do que mal acopanhado"
        })
     botao2.addEventListener("click", () => {
            //alert("Clicou no botão 2")
            caixa2.textContent="amo jesus"
        })
     botaolimpar.addEventListener("click", () => {
            //alert("Clicou no botão limpar")
            caixa2.textContent="te amo"
        })
