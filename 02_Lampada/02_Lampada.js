const botaoLigado = document.getElementById('botaoLigado');
const botaoDesligado = document.getElementById('botaoDesligado');
let Imagem = document.getElementById('imagem');

botaoDesligado.addEventListener('click', () => {
    Imagem.classList.remove('ligada');
    Imagem.classList.add('desligada');
});

botaoLigado.addEventListener('click', () => {
    Imagem.classList.add('ligada');
    Imagem.classList.remove('desligada');
});