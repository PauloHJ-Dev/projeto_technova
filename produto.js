const produtos = [];

document.getElementById("product-form").addEventListener("submit", function(e){
    e.preventDefault();

    const duvida = document.getElementById("product-name").value;
    const usuario = document.getElementById("product-price").value;

    if(duvida && usuario){
        produtos.push({ duvida, usuario });
        atualizarTabela();

        document.getElementById("product-name").value = "";
        document.getElementById("product-price").value = "";
    }
});

function atualizarTabela(){
    const lista = document.getElementById("product-list");
    lista.innerHTML = "";

    produtos.forEach(produto => {
        const linha = document.createElement("tr");

        linha.innerHTML = `
            <td>${produto.usuario}</td>
             <td>${produto.duvida}</td>
        `;

        lista.appendChild(linha);
    });
}