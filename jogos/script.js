document.addEventListener("DOMContentLoaded", () => {
    
    // Captura dos elementos do HTML (Sem repetições)
    const botaoJogar = document.getElementById('btn-jogar');
    const barraHp = document.getElementById('barra-hp');
    const textoHp = document.getElementById('texto-hp');

    // Validação de segurança
    if (!barraHp || !textoHp || !botaoJogar) {
        console.error("ERRO: Verifique se os IDs no index.html estão corretos.");
        return;
    }

    // Criação do mapa e placar de abates
    const mapa = document.createElement('div');
    mapa.className = 'mapa-jogo';
    mapa.innerHTML = '<div class="placar">ABATES: <span id="qtd-kills">0</span></div>';
    document.body.appendChild(mapa);

    let jogoIniciado = false;
    let abates = 0;
    let intervaloInimigos;
    let vidaAtual = 200; // Variável única para controlar os pontos de vida

    // Iniciar a partida
    botaoJogar.addEventListener('click', () => {
        jogoIniciado = true;
        botaoJogar.style.display = 'none';
        document.querySelector('.texto-destaque').style.display = 'none';
        mapa.style.display = 'block';
        
        // Gera um inimigo a cada 1.5 segundos
        intervaloInimigos = setInterval(gerarInimigo, 1500);
    });

    // Criar os inimigos (Silhuetas humanas do CSS)
    function gerarInimigo() {
        if (!jogoIniciado) return;

        const inimigoAntigo = document.querySelector('.inimigo');
        if (inimigoAntigo) inimigoAntigo.remove();

        const inimigo = document.createElement('div');
        inimigo.className = 'inimigo';

        const larguraMaxima = window.innerWidth - 80;
        const alturaMaxima = window.innerHeight - 200;
        const xAleatorio = Math.floor(Math.random() * larguraMaxima);
        const yAleatorio = Math.floor(Math.random() * alturaMaxima);

        inimigo.style.left = xAleatorio + 'px';
        inimigo.style.top = yAleatorio + 'px';

        // Abater o inimigo (Clique nele)
        inimigo.addEventListener('mousedown', (evento) => {
            evento.stopPropagation(); 
            abates++;
            document.getElementById('qtd-kills').innerText = abates;
            inimigo.remove();
        });

        mapa.appendChild(inimigo);
    }

    // Tomar dano ao errar o tiro (Clique no fundo vazio)
    mapa.addEventListener('mousedown', () => {
        if (jogoIniciado) {
            if (vidaAtual > 0) {
                vidaAtual -= 20; 
                barraHp.style.width = (vidaAtual / 200 * 100) + '%';
                textoHp.innerText = vidaAtual;
            }
            
            if (vidaAtual <= 0) {
                alert(`FIM DE JOGO! Você foi eliminado. Total de abates: ${abates}`);
                clearInterval(intervaloInimigos);
                window.location.reload(); 
            }
        }
    });

});
