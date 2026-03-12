/*Declarei as Variaveis*/
const botaoLigado = document.getElementById('botaoLigado');
const botaoDesligado = document.getElementById('botaoDesligado');
let Imagem = document.getElementById('imagem');

/*Remove a ligada e adiciona a desligada*/
botaoDesligado.addEventListener('click', () => {
    Imagem.classList.remove('ligada');
    Imagem.classList.add('desligada');
});

/*Remove a desligada e adiciona a ligada*/
botaoLigado.addEventListener('click', () => {
    Imagem.classList.add('ligada');
    Imagem.classList.remove('desligada');
});