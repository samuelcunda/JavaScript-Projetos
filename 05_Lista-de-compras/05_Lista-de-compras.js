const escrever = document.getElementById("escrever");
const botaoAdiciona = document.getElementById("botaoAdiciona");
const lista = document.getElementById("lista");

botaoAdiciona.addEventListener("click", function() {
    const texto = escrever.value.trim();

    if (texto !== "") {
        const novaCompra = document.createElement("li");
        novaCompra.innerText = texto;

        const botaoExcluir = document.createElement("button");
        botaoExcluir.innerText = "Excluir";
        botaoExcluir.classList.add("btn-excluir");

        botaoExcluir.addEventListener("click", function() {
            novaCompra.remove();
        });

        novaCompra.appendChild(botaoExcluir);
        lista.appendChild(novaCompra);

        escrever.value = "";
    }
});