const precos = {
    gasolina: 6.40,
    etanol: 5.20,
    diesel: 5.80
};

// função principal
const atualizarValor = () => {
    const tipo = document.getElementById("combustivel").value;
    const litrosInput = document.getElementById("litros").value;
    const litros = parseFloat(litrosInput);

    // validação de combustível
    if (!tipo) {
        alert("Escolha um tipo de combustível.");
        return;
    }

    // validação de litros
    if (litrosInput === "") {
        alert("Informe a quantidade de litros.");
        return;
    }

    if (isNaN(litros)) {
        alert("Digite um número válido.");
        return;
    }

    if (litros <= 0) {
        alert("A quantidade deve ser maior que zero.");
        return;
    }

    const preco = precos[tipo];

    calcularAbastecimento(preco, litros);
};

// cálculo
const calcularAbastecimento = (preco, litros) => {
    const total = preco * litros;
    document.getElementById("resultado").textContent =
        `Valor total: ${formatarMoeda(total)}`;
};

// formatação
const formatarMoeda = (valor) =>
    valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

// eventos
document.getElementById("combustivel")
    .addEventListener("change", atualizarValor);

document.getElementById("litros")
    .addEventListener("input", atualizarValor);

// ENTER
document.getElementById("litros")
    .addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            atualizarValor();
        }
    });