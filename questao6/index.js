function calc_Investimento(C, tx, t) {
    var i = tx / 100;
    var M = C * ((1 + i) ** t);
    M = parseFloat(M.toFixed(2));
    return M;
}
var resultado = calc_Investimento(1000, 1, 12);
alert(resultado);