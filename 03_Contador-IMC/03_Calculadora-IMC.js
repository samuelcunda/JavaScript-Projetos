const resultado = document.getElementById('resultado');
const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const botao = document.querySelector('button');

function calcular() {
    const valorAltura = parseFloat(altura.value);
    const valorPeso = parseFloat(peso.value);

    if (valorAltura > 0 && valorPeso > 0) {

        const imc = valorPeso / Math.pow(valorAltura, 2);
        
        let classificacao = "";

        if (imc < 18.5) {
            classificacao = "Abaixo do peso";
        } else if (imc >= 18.5 && imc < 24.9) {
            classificacao = "Peso normal";
        } else if (imc >= 25 && imc < 29.9) {
            classificacao = "Sobrepeso";
        } else if (imc >= 30 && imc < 34.9) {
            classificacao = "Obesidade grau I";
        } else if (imc >= 35 && imc < 39.9) {
            classificacao = "Obesidade grau II";
        } else {
            classificacao = "Obesidade grau III";
        }

        resultado.innerHTML = `O seu IMC é: ${imc.toFixed(2)} - ${classificacao}`;

    } else {
        resultado.innerHTML = "Coloque os valores corretamente.";
    }
}

botao.addEventListener("click", calcular);