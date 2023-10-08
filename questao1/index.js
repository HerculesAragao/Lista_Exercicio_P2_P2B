let populacao_A = 80000;
let taxa_populacao_A = 3/100;
let populacao_B = 200000;
let taxa_populacao_B = 1.5/100;
let anos = 0;

while (populacao_A <= populacao_B) {
    populacao_A += populacao_A * (taxa_populacao_A);
    populacao_B += populacao_B * (taxa_populacao_B);
    anos++;
}

alert('Tempo necessário para a população A ultrapassar ou igualar a população B será de: ' + anos + ' Anos');