// buscar o elemento HTML

let meuelemento = document.getElementById("paragrafo"); //id
console.log(meuelemento);
console.log(meuelemento.textContent); // puxando o conteudo da tag 

let paragrafo1 = document.getElementsByClassName("paragrafo");
console.log(paragrafo1);

// imprimir o conteudo da tag

//console.log(paragrafo.textContent);

for(let i=0; i<paragrafo1.length; i++){
    console.log(paragrafo1(i).textContent);
}

let paragrafo2 = document.getElementsByTagName("p");
console.log(paragrafo2);

// criar um elemento via javascript

let destino = document.getElementById("elemento"); // busca o elemento html
let p = document.createElement("p"); // criar o novo elemento html
p.textContent = "paragrafo criado via javascript"; // insere o conteudo do elemento
destino.append(p); // adiciona um DOM

let ul = document.getElementById("lista");
let itens = ["item 1", "item 2"];
for(let i=0; i<itens.length; i++){
    let li = document.createElement("li");
    li.textContent = itens[i];
    ul.append(li);

}
lista.append(ul);

// função somar

function somar(){
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let soma = n1 + n2;
    console.log(soma);
    let saida = `resultado: <b>${soma}</b>`;
    document.getElementById("resultado").innerHTML = saida;
}