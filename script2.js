let vetor_notas = [];
let cont = 0;

let input_nota = document.getElementById("entrada_nota");
input_nota.focus();

input_nota.addEventListener("keypress", function(evento){
    if(evento.keyCode === 13){
        evento.preventDefault();
        document.getElementById("botao_adicionar").click();
    }
})

function adicionar(){
    let apaga_nota = document.getElementById('media');
    apaga_nota.innerText = "A média é: ";
  
    let valor_nota = document.getElementById('entrada_nota');

    let converte = String(valor_nota.value); 
    let Virgula = converte.indexOf(","); 
    
    if(Virgula == 1){
        converte = converte.replace(",", ".");
    }

    if(valor_nota.value == ""){
        alert('Por favor, insira uma nota.');
        valor_nota.focus();
    } else {

        let nota = Number(converte);

        if(nota >= 0 && nota <= 10){
            vetor_notas.push(nota);

            let seleciona = document.getElementById('notas');
            let elemento = document.createElement('option');
            seleciona.appendChild(elemento);

            elemento.innerHTML = "A nota " + (++cont) + " foi " + nota;

            valor_nota.value = "";
            valor_nota.focus();

            
        } else {
            alert('A nota digitada é inválida, por favor, insira uma nota válida.');
            valor_nota.value = "";
            valor_nota.focus();

        }

    }

}

function calculo(){
        
    let soma = 0

    for(let cont = 0; cont < vetor_notas.length; cont++){
        soma += Number(vetor_notas[cont]);
    }
    let media = soma / (vetor_notas.length);

    let imprime_nota = document.getElementById('media');
    imprime_nota.innerText = "";


    if(typeof vetor_notas[0] !== 'number'){
        imprime_nota.innerHTML = "A média é: ";
    } else {
        imprime_nota.innerHTML = "A média é: " +  (media.toFixed(2));
    }
}

let abre = 0