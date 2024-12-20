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
    console.log(`A soma entre ${n1} e ${n2} é igual a`, soma(n1, n2));
    console.log(`A subtração entre ${n1} e ${n2} é igual a`, subtração(n1, n2));
    console.log(`A multiplicação entre ${n1} e ${n2} é igual a`, multiplicação(n1, n2));
    console.log(`A divisão entre ${n1} e ${n2} é igual a`, divisão(n1, n2));
}

resultados(15, 3);
