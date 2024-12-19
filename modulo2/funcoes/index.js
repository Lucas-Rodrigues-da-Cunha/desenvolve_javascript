function soma (n1, n2) {
    return n1 + n2;
}

function subtração (n1, n2) {
    return n1 - n2;
}

function multiplicação (n1, n2) {
    return n1 * n2;
}

function divisão (n1, n2) {
    return n1 / n2;
}

function resultados (n1, n2) {
    console.log('Soma entre ${n1} e ${n2}', soma(n1, n2));
    console.log('Subtração entre ${n1} e ${n2}', subtração(n1, n2));
    console.log('Multiplicação entre ${n1} e ${n2}', multiplicação(n1, n2));
    console.log('Divisão entre ${n1} e ${n2}', divisão(n1, n2));
}

resultados(15, 5);