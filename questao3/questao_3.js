var vetor = [40,10,2,13,4,51,26,37,18,99];

var soma = 0;
var maiorValor = 0;
var menorValor = 0;

for(var i=0; i<vetor.length; i++){
    soma += vetor[i];

    if(vetor[i] < menorValor){
        menorValor = vetor[i];
    }

    if(vetor[i] > menorValor){
        maiorValor = vetor[i];
    }
}
console.log('A soma é: ' + soma);
console.log('O menor valor é: ' + menorValor);
console.log('O maior valor é: ' + maiorValor);