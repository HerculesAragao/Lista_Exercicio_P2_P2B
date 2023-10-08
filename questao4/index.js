//let salario = 1000; //1995: funcionário contratado por R$1.000,00
var salario = parseFloat(prompt('Digite o salário do funcinário: '));
var tx_aumento = 1.5/100
//var salarioAtual = (1+aumento)*salario; //1996: funcionário recebeu aumento de 1,5%, salário atual de R$1015,00

for(let ano = 1995; ano <= 2023; ano++){
    salario = salario * (1 + tx_aumento);
    if(ano >= 1997){
        salario = salario * (1 + (2 * tx_aumento));  
    }
}
alert('Salário atual do funcionário: ' + salario.toFixed(2));


/*function salarioAtual(salario){
    let ano = 1995;
    let valorSalario = salario;
    let taxa = 1.5;

    for(let i = ano; i <= 2023; i++){
       
        valorSalario = valorSalario + (valorSalario * taxa)/100;
        if(i >= 1997){
            taxa = taxa * 2;
        }
       
        console.log(taxa);
        console.log(valorSalario);
    }
    console.log(valorSalario);
}
salarioAtual(1000);*/