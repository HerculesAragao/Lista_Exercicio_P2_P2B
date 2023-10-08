function area(raio){
    let area = 3.1416 * raio; 
    alert('A área de um círculo cujo raio ' + raio + ' é: ' + area.toFixed(2));
}

raio= parseFloat(prompt('Digite o raio de um círculo: '));
area(raio);