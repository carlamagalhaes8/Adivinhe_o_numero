let numeroSecreto = Math.floor(Math.random() * 99) + 1;

function chutar(){
    let chute = Number(document.getElementById("inserir_chute").value);
    let retorno = document.getElementById("retorno");


    if (chute > numeroSecreto) {
            retorno.innerText = `O NÚMERO SECRETO É MENOR QUE ${chute}`;
    } else if (chute < numeroSecreto) {
            retorno.innerText = `O NÚMERO SECRETO É MAIOR QUE ${chute}`;
    } else{
            retorno.innerText = `PARABÉNS! VOCÊ DESCOBRIU O NÚMERO SECRETO ${numeroSecreto}`;
        }
}
