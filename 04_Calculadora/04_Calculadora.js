const numeros = document.getElementById('numeros');
const botoes = document.querySelectorAll('button');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const valorBotao = botao.innerText;

        if (valorBotao === '=') {
            try {
                let equacao = numeros.innerText.replace(/X/g, '*').replace(/,/g, '.');
                numeros.innerText = eval(equacao);
            } catch (erro) {
                numeros.innerText = "Erro";
            }

        } else if (valorBotao === '⌫') { 
            if (numeros.innerText.length > 1) {
                numeros.innerText = numeros.innerText.slice(0, -1);
            } else {
                numeros.innerText = '0';
            }

        } else if (valorBotao === 'C') {
            numeros.innerText = '0';

        } else {
            if (numeros.innerText === '0') {
                numeros.innerText = valorBotao;
            } else {
                numeros.innerText += valorBotao;
            }
        }
    });
});