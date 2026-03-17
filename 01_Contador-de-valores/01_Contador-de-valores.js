const valor = document.getElementById('valor') ;
const mais = document.getElementById('mais');
const menos = document.getElementById('menos');
const resetar = document.getElementById('reset');

let contador = 0;

mais.addEventListener('click', () => {
    contador = contador +1;
    valor.innerHTML = contador;
});

menos.addEventListener('click', () => {
    contador = contador -1;
    valor.innerHTML = contador;
});

resetar.addEventListener('click', () => {
    contador= 0
    valor.innerHTML = contador
});