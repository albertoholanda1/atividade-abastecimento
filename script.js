// objeto com os preços (substitui várias variáveis e o switch)
const precos = {
    gasolina: 6.69,
    etanol: 5.80,
    diesel: 6.20
};

const selectCombustivel = document.getElementById("combustivel");
const inputLitros = document.getElementById("litros");
const resultado = document.getElementById("resultado");

// função para validar os dados
const validarDados = (tipo, litros) => {
    if (!tipo) {
        alert("Selecione um combustível");
        return false;
    }

    if (inputLitros.value === "") {
        alert("Digite a quantidade de litros");
        return false;
    }

    if (isNaN(litros)) {
        alert("Valor inválido");
        return false;
    }

    if (litros < 0) {
        alert("Não é permitido valor negativo");
        return false;
    }

    return true;
};

// função principal
const calcularAbastecimento = () => {
    const tipo = selectCombustivel.value;
    const litros = parseFloat(inputLitros.value);

    if (!validar(tipo, litros)) return;

    const preco = precos[tipo];

    const total = litros * preco;

    // formatação em moeda BR
    resultado.textContent = total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
};

// eventos
selectCombustivel.addEventListener("change", calcularAbastecimento);
inputLitros.addEventListener("input", calcularAbastecimento);

// Enter não limpa os dados
inputLitros.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        calcularAbastecimento();
    }
});
