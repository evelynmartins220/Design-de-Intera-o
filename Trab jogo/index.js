let count = 0;
let gameOver = false;
let intervalo;
let recorde = 0;


function iniciar() {
    console.log(document.getElementById("cano"))
    
    document.getElementById("cano").setAttribute("class", "cano")
    document.getElementById("cano").removeAttribute("style")
    document.getElementById("mario").removeAttribute("style")
    document.getElementById("mario").setAttribute("src", "img/mario.gif")    

    const mario = document.querySelector('.mario');
    const cano = document.querySelector('.cano');
    const pontuacao = document.getElementById('pontuacao');
    const pontuacaoFinal = document.getElementById('pontuacaoFinal');
    const gameOverElement = document.getElementById('gameOver');
    const som = document.getElementById('som');

    // Limpar intervalo anterior, se existir
    if (intervalo) {
        clearInterval(intervalo);
    }

    // Redefinir variáveis e estado do jogo
    count = 0;
    gameOver = false;
    pontuacao.style.display = 'block';
    pontuacaoFinal.style.display = 'none';
    gameOverElement.src = '';

    // Reiniciar estilos e animações
    cano.classList.add('animacaoCano');

    som.play();
    // Adicionar evento de clique para pular
    const pular = document.getElementById('pular');
    pular.addEventListener('click', pulo);

    // Iniciar o loop do jogo
    intervalo = setInterval(loop, 10);
    console.log('Jogo iniciado');
}

function pulo() {
    const mario = document.querySelector('.mario');
    mario.classList.add('pulo');

    setTimeout(function() {
        mario.classList.remove('pulo');
    }, 500);
}

function loop() {
    const cano = document.querySelector('.cano');
    const posicaoCano = cano.offsetLeft;

    const mario = document.querySelector('.mario');
    const posicaoMario = +window.getComputedStyle(mario).bottom.replace('px', '');

    count++;
    const pontuacao = document.getElementById('pontuacao');
    pontuacao.innerHTML = `Pontuação: ${count}`;
    if(posicaoCano <= 120 && posicaoMario < 80 && posicaoCano > 0 && gameOver==false){
        console.log(gameOver)
        cano.style.animation = 'none';
        cano.style.left = `${posicaoCano}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${posicaoMario}px`;
        mario.src = "img/game-over.png";
        mario.style.width = '80px';
        mario.style.marginLeft = '40px';

        const gameOverImg = document.getElementById('gameOver');
        gameOverImg.src = 'img/gameOver.png';
        gameOverImg.style.display = 'block';

        clearInterval(intervalo);
        console.log('Intervalo parado');

        // Mostrar a pontuação final
        pontuacao.style.display = 'none';
        const pontuacaoFinal = document.getElementById('pontuacaoFinal');
        pontuacaoFinal.innerHTML = `Pontuação Final: ${count}`;
        pontuacaoFinal.style.display = 'block';

        // Atualizar o recorde se a pontuação atual for maior
        if (count > recorde) {
            recorde = count;
            const recordeElement = document.getElementById('recorde');
            recordeElement.innerHTML = `Recorde: ${recorde}`;
            console.log('Novo recorde:', recorde);
        }

        gameOver = true;
        count = 0;
    }
}
