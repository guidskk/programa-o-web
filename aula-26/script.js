// criar os preços 
const precoGasolina = 6.40;
const precoEtanol = 5.20;
const precoDiesel = 5.80;

// função: identificar o combustivel selecionado pelo usuario

function atualizavalor(){
    let tipo = document.getElementById("combustivel").value;
    console.log(tipo);

    let litros = parseFloat(document.getElementById("litro")).value;
    switch (tipo){
        case "gasolina":
            precoPorlitro = precoGasolina;
            break;
        
        case "etanol":
            precoPorlitro = precoEtanol;
            break;
            
        case "diesel":
            precoPorlitro = precoDiesel;
            break;    
    }
    console.log(precoPorlitro);

function calcularvalorabastecimento(precoCombustivel, litros){
   // let valorTotal = precoCombustivel * litros;
   // document.getElementById("resultado").textContent = valorTotal;

   if(litros <= 0 || isNaN(litros)){
        document.getElementById("resultado").textContent = "insira valor valido";
        return;
   } else {
        let valorTotal = precoCombustivel * litros;
        document.getElementById("resultado").textContent = `valor R$ ${valorTotal}`
   }
}
};

let tipoCombustivel = document.getElementById("combustivel");
tipoCombustivel.addEventListener("change", atualizavalor);

let litros = document.getElementById("litros");
litros.addEventListener("input", atualizavalor);

litros.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        event.preventDefault(); // evita que o formulario seja reciclado
        atualizavalor();
    }

});

function formulamoeda(valor){
    return "R$ " + valor.toLocaleString("pt-Br";
    {minimumFractionDigits: 2, maximumFractionDigits: 2});
};
