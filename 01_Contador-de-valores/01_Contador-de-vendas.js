/*Declarei as variaveis */
const valor = document.getElementById('valor') ;
const mais = document.getElementById('mais');
const menos = document.getElementById('menos');
const resetar = document.getElementById('reset');

let contador = 0;

/*Adiciona um numero ao valor*/
mais.addEventListener('click', () => {
    contador = contador +1;
    valor.innerHTML = contador;
});

/*Subtrai um numero ao valor*/
menos.addEventListener('click', () => {
    contador = contador -1;
    valor.innerHTML = contador;
});

/*Reseta o valor do contador*/
resetar.addEventListener('click', () => {
    contador= 0
    valor.innerHTML = contador
});