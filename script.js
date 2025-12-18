let numeroSecreto = Math.floor(Math.random() * 99) + 1; //Esse código em JavaScript é utilizado para gerar um número aleatório inteiro. A função Math.random() cria um valor decimal entre 0 e 1, que ao ser multiplicado por 99 amplia esse intervalo. Em seguida, Math.floor() arredonda o número para baixo, transformando-o em um valor inteiro. Por fim, soma-se 1 ao resultado para evitar o zero, garantindo que o número gerado esteja entre 1 e 99.

function chutar(){
    let chute = Number(document.getElementById("inserir_chute").value);
    let retorno = document.getElementById("retorno");


    if (chute > numeroSecreto) {
            retorno.innerText = `O NÚMERO SECRETO É MENOR QUE ${chute}`;
    } else if (chute < numeroSecreto) {
            retorno.innerText = `O NÚMERO SECRETO É MAIOR QUE ${chute}`;
    } else{
            retorno.innerText = `PARABÉNS! VOCÊ DESCOBRIU O NÚMERO SECRETO É ${numeroSecreto}`;
        }
}
