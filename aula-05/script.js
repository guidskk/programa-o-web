//alert("teste");

// variaveis

var animal = "gato";
console.log(animal);

let nomecompleto = 'guilherme magalhães';
console.log(nomecompleto);

var valor0 = 2;
const valor1 = 10;
console.log(valor1);
valor0 = 3; // permite reatribuição, pois é do tipo var/let  
// valor1 = 30; como é uma constante nao permite reatribuição

// verificar o tipo de variavel
console.log(typeof valor0);

// impressão
// consolo.log
// template literal
console.log(`seja bem vindo ${nomecompleto}. aproveita a estadia`);

// algoritmo: entrada e processamento = saida
// entrada de dados 
var nome = window.prompt("digite o seu nome: ");
document.writeln(`seja bem vindo ${nome}. aproveita a estadia`);

// operadores aritmeticos
// adição (+), subtração (-), multiplicação (*), divisão (/)

// operadores de comparação 
// Os principais operadores incluem igualdade (== ou =), diferente (!= ou <>), maior (>), menor (<), maior ou igual (>=) e menor ou igual (<=).
console.log(5 == '5'); // olha apenas para valores  OU - LOGICO
console.log(5 === '5'); // olha para tipo e valor E - LOGICO &&

var n1 = parseFloat(window.prompt("valor 1: "));
console.log(typeof n1);
var n2 = parseFloat(window.prompt("valor 2: "));
var resultado = n1 + n2;
document.writeln(`resultado ${resultado}`);

// estrutura de controle (if - else)

    if (resultado >=18){
        console.log("Maior de idade!");
    } else {
        console.log("Menor de idade!");
    }

// estrutura de repetição ( for, while e do-while)

    for (let i=0; i<10; i++) {
        console.log("iteração: " + i);
    }

    while(i<5){
        console.log("interação: " + i);
        i++;
    }

// escolha-caso

var diaSemana = 3;
switch (diaSemana) {
    case 1: 
        console.log("domingo");
        break;
    case 2 :
        console.log("segunda-feira");
        break;
    default:
        console.log("escolha uma opção");
}


