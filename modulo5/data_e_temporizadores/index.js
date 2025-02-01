// Neste exercício, você criará um temporizador de contagem regressiva que aceita uma data futura e conta o tempo restante até essa data. 
// O temporizador exibirá os dias, horas, minutos e segundos restantes e será atualizado a cada segundo.

// 1. Defina uma função para calcular o tempo restante até uma data futura: calcularTempoRestante(dataFutura).
// 4. Manipule o objeto Date para calcular a diferença entre a data atual e a data futura.

const dataFutura = new Date('2026-08-19T23:59:59').getTime();

const calcularTempoRestante = (dataFutura) => {
    const dataAtual = new Date();
    const diferencaEmMs = dataFutura - dataAtual.getTime();

    const segundos = Math.floor(diferencaEmMs / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);

    const horasRestantes = horas - (dias * 24);
    const minutosRestantes = minutos - (horas * 60);
    const segundosRestantes = segundos - (minutos * 60);
    
    return {
      dias: dias,
      horas: horasRestantes,
      minutos: minutosRestantes,
      segundos: segundosRestantes
    };
}

// 2. Defina uma função para atualizar o temporizador na tela: atualizarTemporizador().

const atualizarTemporizador = () => {
  const tempoRestante = calcularTempoRestante(dataFutura);
  console.log(`${tempoRestante.dias} dias, ${tempoRestante.horas} horas, ${tempoRestante.minutos} minutos, ${tempoRestante.segundos} segundos`);
}

// 3. Use setInterval para atualizar o temporizador a cada segundo.

console.log(calcularTempoRestante(dataFutura));
setInterval(atualizarTemporizador, 1000);