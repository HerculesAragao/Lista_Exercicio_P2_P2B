let par = [], impar = [];
for(i=0; i<10; i++){
    n=parseInt(prompt('Digite um número inteiro'));
    if(n%2==0){
        par.push(n);
    }else{
        impar.push(n);
    }
}
alert('A quantidade de números pares são: ' + par.length);
alert('A quantidade de números impares são: ' + impar.length);