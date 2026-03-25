let contadorEl = document.getElementById("contador");
let btnInc = document.getElementById("incrementar");
let btnDec = document.getElementById("decrementar");

let inputTexto = document.getElementById("inputTexto");
let contadorCaracteres = document.getElementById("contadorCaracteres");
let areaParagrafos = document.getElementById("paragrafos");

let tipoLista = document.getElementById("tipoLista");
let btnLista = document.getElementById("adicionarLista");
let areaListas = document.getElementById("listas");

let btnReset = document.getElementById("resetar");

let contador = 0;

btnInc.addEventListener("click", () => {
    contador++;
    contadorEl.textContent = contador;
});

btnDec.addEventListener("click", () => {
    if (contador > 0) {
        contador--;
        contadorEl.textContent = contador;
    } else {
        alert("O contador já está em zero!");
    }
});


inputTexto.addEventListener("input", () => {
    let texto = inputTexto.value.replace(/\s/g, "");
    contadorCaracteres.textContent = texto.length + " caracteres";
});


inputTexto.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        let texto = inputTexto.value.trim();

        if (texto !== "") {
            let p = document.createElement("p");
            p.textContent = texto;
            areaParagrafos.appendChild(p);
        }

        inputTexto.value = "";
        contadorCaracteres.textContent = "0 caracteres";
    }
});

// ===== Lista =====

btnLista.addEventListener("click", () => {
    let tipo = tipoLista.value;

    let lista = document.createElement(tipo);

    for (let i = 1; i <= 3; i++) {
        let item = document.createElement("li");
        item.textContent = "Item " + i;
        lista.appendChild(item);
    }

    areaListas.appendChild(lista);
});

// ===== botão de reset =====

btnReset.addEventListener("click", () => {
    contador = 0;
    contadorEl.textContent = "0";

    inputTexto.value = "";
    contadorCaracteres.textContent = "0 caracteres";

    areaParagrafos.innerHTML = "";
    areaListas.innerHTML = "";
});