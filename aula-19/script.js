// Eventos: propriedade

//oneclick

let botao1 = document.getElementById("botao1");

// manipulador (comportamento para esse botao)

botao1.onclick = function(){
    console.log("primeiro evento");
}

botao1.onclick = function(){
    botao1.textContent = "texto alterado";
}

// mouseover

let botao2 = document.getElementById("botao2");
botao2.onmouseover = function(){
    botao2.style.backgroundColor = "red";
}

// mouseout (tirar o mouse)
// voltar a cor original do botao

botao2.onmouseout = function(){
    botao2.style.backgroundColor = ""; 
}

// double click 

botao2.ondblclick = function(){
    botao2.textContent = "duplo clique";
}

// onkeydown 

let campoentrada = document.getElementById("input");
let resultado = document.getElementById("resultado");
campoentrada.onkeydown = function(event){
    if (event.key == "Enter");
    console.log("teste");
    resultado.innerHTML = campoentrada.value;
    campoentrada.value = "";
}

